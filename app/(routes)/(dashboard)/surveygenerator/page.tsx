"use client";

import { useState } from "react";
import axios from "axios";
import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatCompletionRequestMessage } from "openai";
import { useRouter } from "next/navigation";

import { Loader } from "@/components/Loader";
import { Empty } from "@/components/Empty";
import { Heading } from "@/components/Heading";
import { capabilities } from "./capabilities";
import { formSchema } from "./constants";
import { FormField, Form, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BotAvatar } from "@/components/BotAvatar";
import { UserAvatar } from "@/components/UserAvatar";
import { useProModal } from "@/hooks/useProModal";

import toast from "react-hot-toast";
import { Card } from "@/components/ui/card";

const ConverSationPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/surveygenerator", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <div className="px-4 lg:px-8 flex items-start gap-x-3 mb-8 flex-col">
        <div className="flex flex-row mb-5">
          <div className={cn("p-2 w-fit rounded-md bg-violet-500/10 mr-3")}>
            <MessageSquare className={cn("w-10 h-10 text-violet-500")} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">SciSurvey</h2>
            <p className="text-sm text-muted-foreground">
              Accelerate your research with AI
            </p>
          </div>
          <div className="px-4 lg:px-8"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 md:text-sm md:grid-cols-3 sm:grid-cols-2 w-full max-w-7xl text-sm">
          {capabilities.map((capability) => {
            return (
              <Card
                key={capability.Heading}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md bg-teal-950")}>
                    <capability.Icon
                      className={cn("w-8 h-8", capability.IconColor)}
                    />
                  </div>
                  <div className="font-semibold text-">
                    {capability.Description}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      {/* <Heading
        title="Survey Generator"
        description="Our most advanced survey generator."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      /> */}

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Generate a scientific survey to measure the impact of climate change on people's sleep quality."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverSationPage;
