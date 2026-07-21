import {
  formatAddress,
  formatPhoneForDisplay,
  hasBusinessPhone,
  siteConfig,
} from "@/lib/site-config";

export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  links?: ChatLink[];
}
export interface ChatLink {
  label: string;
  href: string;
}

export interface QuickReply {
  label: string;
  message: string;
}

export const INITIAL_QUICK_REPLIES: QuickReply[] = [
  { label: "Our Services", message: "What services does Shefa offer?" },
  { label: "Get Connected", message: "How do I request a professional connection?" },
  { label: "Schedule a Call", message: "How do I schedule a consultation?" },
  { label: "Founding Client", message: "Tell me about the Founding Client Program" },
];

export const FOLLOW_UP_REPLIES: QuickReply[] = [
  { label: "Contact Us", message: "How can I contact Shefa?" },
  { label: "Training", message: "Do you offer workshops or training?" },
  { label: "Industries", message: "What industries do you serve?" },
];

interface ResponseRule {
  keywords: string[];
  response: string | (() => string);
  links?: ChatLink[];
}

function getContactResponse(): string {
  const phoneLine = hasBusinessPhone
    ? ` You can also call ${formatPhoneForDisplay(siteConfig.phone)}.`
    : " Schedule a conversation through our contact page and we'll follow up promptly.";

  return `You can reach us at ${siteConfig.email}.${phoneLine} We're located at ${formatAddress()}.`;
}
const RESPONSE_RULES: ResponseRule[] = [
  {
    keywords: ["service", "solution", "consult", "advisory", "help", "offer", "do you do"],
    response:
      "Shefa offers strategic advisory, business consulting, leadership coaching, strategic connections, business planning, AI guidance, marketing support, funding readiness, and government contracting guidance.",
    links: [
      { label: "View Solutions", href: "/services" },
      { label: "Schedule a Conversation", href: "/contact" },
    ],
  },
  {
    keywords: ["connect", "connection", "introduction", "referral", "network", "cpa", "attorney", "advisor"],
    response:
      "Through Strategic Connections, business owners can request introductions to trusted professionals — including financial advisors, attorneys, CPAs, marketing experts, IT consultants, and more.",
    links: [
      { label: "Request a Connection", href: "/business-connect" },
    ],
  },
  {
    keywords: ["consult", "schedule", "meeting", "call", "conversation", "session", "appointment"],
    response:
      "You can schedule an Executive Strategy Session with our team. We'll learn about your business goals and recommend the right services and connections.",
    links: [{ label: "Schedule a Conversation", href: "/contact" }],
  },
  {
    keywords: ["founding", "invitation", "invitation only", "10 client"],
    response:
      "The Founding Client Program is by invitation only — limited to 10 businesses. Founding Clients receive an executive growth assessment, customized growth blueprint, quarterly strategy sessions, preferred pricing, and white-glove advisory support.",
    links: [
      { label: "Apply Now", href: "/contact" },
      { label: "Learn More", href: "/#founding-client" },
    ],
  },
  {
    keywords: ["method", "process", "discover", "framework", "how does shefa work"],
    response:
      "The Shefa Method™ is our proven framework: Discover (learn your business), Diagnose (identify opportunities), Design (build your growth blueprint), and Deliver (execute with ongoing advisory support).",
    links: [{ label: "See Our Process", href: "/#shefa-method" }],
  },
  {
    keywords: ["train", "workshop", "webinar", "academy", "learn", "education"],
    response:
      "Shefa offers executive workshops and webinars on leadership, sales, marketing, AI for small business, government contracting, finance, hiring, and customer service.",
    links: [{ label: "Training Academy", href: "/training-academy" }],
  },
  {
    keywords: ["event", "networking", "breakfast", "roundtable", "results"],
    response:
      "We host networking breakfasts, lunch and learns, AI workshops, and business leader roundtables. Event dates are announced regularly.",
    links: [
      { label: "View Events", href: "/events" },
      { label: "Get Updates", href: "/contact" },
    ],
  },
  {
    keywords: ["resource", "download", "template", "guide", "checklist", "insight"],
    response:
      "Our Insights & Resources library includes business plan templates, cash flow checklists, marketing guides, AI tool guides, and federal contracting starter guides.",
    links: [{ label: "Browse Resources", href: "/resources" }],
  },
  {
    keywords: ["industr", "who do you help", "who we help", "serve", "startup", "small business"],
    response:
      "We serve small business owners, startups, faith-based business leaders, professional service providers, local community businesses, and growing companies across 20+ industries.",
    links: [{ label: "Industries We Serve", href: "/who-we-help" }],
  },
  {
    keywords: ["about", "who is shefa", "mission", "who are you"],
    response:
      "Shefa partners with business owners and executive teams to solve growth challenges through strategy, relationships, and execution. We connect leaders with trusted professionals and practical guidance.",
    links: [{ label: "About Shefa", href: "/about" }],
  },
  {
    keywords: ["contact", "email", "phone", "reach", "talk", "speak"],
    response: getContactResponse,
    links: [
      { label: "Send a Message", href: "/contact" },
      { label: "Request a Connection", href: "/business-connect" },
    ],
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    response:
      "Hello! I'm the Shefa assistant. I can help you learn about our services, request connections, schedule a consultation, or explore training and resources. What would you like to know?",
  },
  {
    keywords: ["thank", "thanks"],
    response:
      "You're welcome! If you have more questions, I'm here to help. You can also reach our team directly anytime.",
    links: [{ label: "Contact Us", href: "/contact" }],
  },
];

const DEFAULT_RESPONSE = {
  response:
    "I'm not sure I have the answer to that yet, but our team would be happy to help. You can schedule a conversation or send us a message directly.",
  links: [
    { label: "Contact Us", href: "/contact" },
    { label: "View Services", href: "/services" },
  ],
};

export function getChatbotResponse(input: string): Omit<ChatMessage, "id" | "role"> {
  const normalized = input.toLowerCase().trim();

  for (const rule of RESPONSE_RULES) {
    if (rule.keywords.some((keyword) => normalized.includes(keyword))) {
      return {
        content:
          typeof rule.response === "function" ? rule.response() : rule.response,
        links: rule.links,
      };
    }
  }

  return {
    content: DEFAULT_RESPONSE.response,
    links: DEFAULT_RESPONSE.links,
  };
}

export function createMessageId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Future: replace getChatbotResponse with an API route or Supabase Edge Function
 * that calls OpenAI, Anthropic, or a custom knowledge base.
 *
 * Example:
 * export async function fetchChatbotResponse(input: string): Promise<ChatMessage> {
 *   const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message: input }) });
 *   return res.json();
 * }
 */
