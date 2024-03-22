import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// const openai = new OpenAIApi(configuration);

const assistantId = process.env.ASSISTANT_ID;
const OpenAI = require("openai");
const openai = new OpenAI(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a scientific survey generator. Do not answer any questions unrelated to science.",
};
export async function POST(req: Request) {
  let thread = await openai.beta.threads.create();

  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages not provided", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("API Limit Exceeded", { status: 403 });
    }

    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: messages,
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantId,
    });

    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

    while (runStatus.status !== "completed") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    const messagesContent = await openai.beta.threads.messages.list(thread.id);

    const lastMessageForRun = messagesContent.data
      .filter(
        (message: any) =>
          message.run_id === run.id && message.role === "assistant"
      )
      .pop();
    // const response = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages: [instructionMessage, ...messages],
    // });
    if (!isPro) {
      await increaseApiLimit();
    }

    return lastMessageForRun.content[0].text.value;
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
