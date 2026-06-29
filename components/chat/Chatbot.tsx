"use client";

import Link from "next/link";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  createMessageId,
  FOLLOW_UP_REPLIES,
  getChatbotResponse,
  INITIAL_QUICK_REPLIES,
  type ChatMessage,
  type QuickReply,
} from "@/lib/chatbot";

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Welcome to Shefa! I'm here to help you explore our services, request trusted connections, or schedule a strategy session. How can I assist you today?",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>(INITIAL_QUICK_REPLIES);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setQuickReplies([]);
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const response = getChatbotResponse(trimmed);
    const assistantMessage: ChatMessage = {
      id: createMessageId(),
      role: "assistant",
      ...response,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
    setQuickReplies(FOLLOW_UP_REPLIES);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-navy-950 shadow-lg transition-transform hover:scale-105 hover:bg-gold-400 focus-visible:outline-none sm:bottom-6 sm:right-6"
          aria-label="Open Shefa chat assistant"
        >
          <MessageCircle className="h-6 w-6" aria-hidden />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed bottom-5 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-md flex-col overflow-hidden rounded-xl border border-navy-800 bg-white shadow-2xl sm:bottom-6 sm:right-6"
          role="dialog"
          aria-label="Shefa chat assistant"
          aria-modal="true"
        >
          <div className="flex items-center justify-between bg-navy-950 px-4 py-3 text-white">
            <div>
              <p className="font-serif text-base font-semibold">Shefa Assistant</p>
              <p className="text-xs text-navy-300">Strategic Connections. Sustainable Growth.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded p-1.5 text-navy-200 transition-colors hover:bg-navy-800 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="flex max-h-80 flex-1 flex-col gap-3 overflow-y-auto bg-gray-soft px-4 py-4 sm:max-h-96"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-navy-900 text-white"
                      : "border border-gray-muted bg-white text-navy-800 shadow-sm"
                  }`}
                >
                  <p>{message.content}</p>
                  {message.links && message.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          className="inline-block rounded-sm bg-gold-100 px-2.5 py-1 text-xs font-semibold text-gold-800 transition-colors hover:bg-gold-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start" aria-label="Assistant is typing">
                <div className="rounded-xl border border-gray-muted bg-white px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="chat-typing-dot" />
                    <span className="chat-typing-dot animation-delay-200" />
                    <span className="chat-typing-dot animation-delay-400" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {quickReplies.length > 0 && (
            <div className="flex flex-wrap gap-2 border-t border-gray-muted bg-white px-4 py-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply.label}
                  type="button"
                  onClick={() => sendMessage(reply.message)}
                  disabled={isTyping}
                  className="rounded-full border border-gold-300 bg-gold-50 px-3 py-1 text-xs font-medium text-navy-800 transition-colors hover:bg-gold-100 disabled:opacity-50"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-gray-muted bg-white px-3 py-3"
          >
            <label htmlFor="chatbot-input" className="sr-only">
              Type your message
            </label>
            <input
              ref={inputRef}
              id="chatbot-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, connections..."
              disabled={isTyping}
              className="flex-1 rounded-lg border border-gray-muted px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 disabled:opacity-60"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-navy-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
