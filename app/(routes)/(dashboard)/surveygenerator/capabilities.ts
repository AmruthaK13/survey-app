import { MessageSquare } from "lucide-react";
import {
  FaRegLightbulb,
  FaObjectGroup,
  FaChartLine,
  FaPen,
  FaCompass,
  FaMagic,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";
export const capabilities = [
  {
    Heading: "Generate",
    Description: "Generate the best scientific survey based on the prompt.",
    Icon: FaRegLightbulb,
    IconColor: "text-[#EAE2B7]",
    Examples: "",
  },
  {
    Heading: "Defining",
    Description: "Defining Objectives and Clarifying Research Goals",
    Icon: FaObjectGroup,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#F77F00]",
    Examples:
      '- "I am studying the impact of sleep quality on productivity. Can you suggest some survey questions to accurately measure these variables?" - "What types of scales would be most appropriate for assessing stress levels in a workplace environment?"',
  },
  {
    Heading: "Optimizing",
    Description: "Optimizing Survey Design for Maximum Engagement",
    Icon: FaChartLine,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#FCBF49]",
    Examples:
      '- "How can I structure my survey to maximize response rates and ensure data reliability?"- "I want to design a survey that minimizes respondent fatigue. What are the best practices for question order and survey length?"',
  },
  {
    Heading: "Crafting",
    Description: "Crafting Clear and Unbiased Questions",
    Icon: FaPen,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#D62828]",
    Examples:
      '- "Can you help me rephrase this question to make it more clear and unbiased: \'Don\'t you think that consuming sugar is bad for health?\'"- "What are some examples of Likert scale questions to assess customer satisfaction with our product?"',
  },
  {
    Heading: "Navigating",
    Description: "Navigating Compliance and Ethics in Survey Research",
    Icon: FaCompass,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#F77F00]",
    Examples:
      '- "What are the key ethical considerations I should keep in mind while collecting data from minors?"- "Can you provide a checklist of GDPR compliance points for my survey targeting European participants?"',
  },

  {
    Heading: "Enhancing",
    Description: "Enhancing Data Collection and Analysis Techniques",
    Icon: FaMagic,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#EAE2B7]",
    Examples:
      '- "What method should I use to ensure that my survey sample represents the general population?"- "I want to analyze the correlation between two variables in my survey. What statistical methods do you recommend?"',
  },

  {
    Heading: "Boosting",
    Description: "Boosting Survey Engagement and Response Rates",
    Icon: FaRocket,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#D62828]",
    Examples:
      '- "How can I make my survey more engaging to increase the response rate among teenagers?"- "What incentives are typically effective for encouraging participation in academic research surveys?"',
  },
  {
    Heading: "Mastering",
    Description: "Mastering Pilot Testing and Incorporating Feedback",
    Icon: FaTrophy,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#FCBF49]",
    Examples:
      '- "Can you guide me through the process of conducting a pilot test for my survey?"- "How do I incorporate feedback from the pilot test to improve the final version of my survey?"',
  },
];
