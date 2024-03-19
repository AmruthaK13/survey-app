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
    Heading: "Defining",
    Description: "Defining Objectives and Clarifying Research Goals",
    Icon: FaObjectGroup,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#F77F00]",
    Examples:
      '- "I am studying the impact of sleep quality on productivity. Can you suggest some survey questions to accurately measure these variables?" ',
  },
  {
    Heading: "Optimizing",
    Description: "Optimizing Survey Design for Maximum Engagement",
    Icon: FaChartLine,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#FCBF49]",
    Examples:
      '- "How can I structure my survey to maximize response rates and ensure data reliability?"',
  },
  {
    Heading: "Crafting",
    Description: "Crafting Clear and Unbiased Questions",
    Icon: FaPen,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#D62828]",
    Examples:
      "- \"Can you help me rephrase this question to make it more clear and unbiased: 'Don't you think that consuming sugar is bad for health?'\"",
  },
  {
    Heading: "Navigating",
    Description: "Navigating Compliance and Ethics in Survey Research",
    Icon: FaCompass,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#F77F00]",
    Examples:
      '- "Can you provide a checklist of GDPR compliance points for my survey targeting European participants?"',
  },

  {
    Heading: "Enhancing",
    Description: "Enhancing Data Collection and Analysis Techniques",
    Icon: FaMagic,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#EAE2B7]",
    Examples:
      '- "What method should I use to ensure that my survey sample represents the general population?"',
  },

  {
    Heading: "Boosting",
    Description: "Boosting Survey Engagement and Response Rates",
    Icon: FaRocket,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#D62828]",
    Examples:
      '- "How can I make my survey more engaging to increase the response rate among teenagers?"',
  },
  {
    Heading: "Mastering",
    Description: "Mastering Pilot Testing and Incorporating Feedback",
    Icon: FaTrophy,
    IconColor: "text-[#EAE2B7]",
    // IconColor: "text-[#FCBF49]",
    Examples:
      '- "How do I incorporate feedback from the pilot test to improve the final version of my survey?"',
  },
];
