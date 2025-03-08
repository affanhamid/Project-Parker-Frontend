"use client";
import { FaUser, FaRobot } from "react-icons/fa";
import { useState } from "react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import MessageInput from "@/components/MessageInput";

interface MessageInterface {
  id: number;
  text: string;
  sender: "user" | "ai";
  image?: string;
  loading?: boolean;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleUserInputMessage = () => {
    if (input.trim() === "" && !image) return;

    const userMessage: MessageInterface = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      image: image ?? undefined,
    };

    const loadingMessage: MessageInterface = {
      id: messages.length + 2,
      text: "",
      sender: "ai",
      loading: true,
    };

    setMessages([...messages, userMessage, loadingMessage]);
    sendMessage(input, loadingMessage.id);
    setInput("");
    setImage(null);
  };

  const sendMessage = async (input: string, loadingMessageId: number) => {
    console.log("Message sent: ", input);
    const url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:8000"
        : "https://affanhamid.com:8000";

    try {
      const response = await fetch(`${url}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const data = await response.json();
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === loadingMessageId
            ? { ...msg, text: data.response, loading: false }
            : msg,
        ),
      );
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === loadingMessageId
            ? { ...msg, text: "Error retrieving response.", loading: false }
            : msg,
        ),
      );
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="p-4 text-lg font-bold">Parker Chat</div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            text={msg.text}
            sender={msg.sender}
            image={msg.image}
            loading={msg.loading}
          />
        ))}
      </div>
      <MessageInput
        input={input}
        setInput={setInput}
        image={image}
        setImage={setImage}
        handleUserInputMessage={handleUserInputMessage}
      />
    </div>
  );
};

const LoadingDots = () => <span className="animate-pulse">...</span>;

const ChatBubble = ({
  text,
  sender,
  image,
  loading,
}: {
  text: string;
  sender: string;
  image?: string;
  loading?: boolean;
}) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && <FaRobot size={20} className="mr-2 text-white" />}
      <div
        className={`p-3 rounded-lg max-w-[60%] ${isUser ? "bg-purple" : "bg-gray"}`}
      >
        {image && (
          <img src={image} alt="Uploaded" className="mt-2 max-w-full rounded" />
        )}
        {loading ? <LoadingDots /> : <MarkdownRenderer markdown={text} />}
      </div>
      {isUser && <FaUser size={20} className="ml-2 text-white" />}
    </div>
  );
};

export default ChatWindow;
