"use client";
import { FaUser, FaRobot, FaPaperPlane } from "react-icons/fa"; // Icons for User, AI, and Send Button
import { useState } from "react";
import MarkdownRenderer from "@/components/MarkdownRenderer"

interface MessageInterface {
  id: number;
  text: string;
  sender: "user" | "ai";
  loading?: boolean;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [input, setInput] = useState("");

  const handleUserInputMessage = () => {
    if (input.trim() === "") return;

    // Create the user message.
    const userMessage: MessageInterface = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };

    // Create a loading message placeholder for the AI response.
    const loadingMessage: MessageInterface = {
      id: messages.length + 2,
      text: "",
      sender: "ai",
      loading: true,
    };

    // Update messages with both the user's message and the loading placeholder.
    setMessages([...messages, userMessage, loadingMessage]);

    // Send the message and pass the loading message's id so we can update it later.
    sendMessage(input, loadingMessage.id);
    setInput("");
  };

  const sendMessage = async (input: string, loadingMessageId: number) => {
    console.log("Message sent: ", input);

    let url;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8000";
    } else {
      url = "https://affanhamid.com:8000";
    }
    try {
      const response = await fetch(`${url}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Server response:", data);

      // Replace the loading message with the actual AI answer.
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === loadingMessageId
            ? { ...msg, text: data.response, loading: false }
            : msg,
        ),
      );
    } catch (error) {
      console.error("Error sending message:", error);
      // Update the loading message to show an error message.
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
      {/* Chat Header */}
      <div className="p-4 text-lg font-bold">Parker Chat</div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            text={msg.text}
            sender={msg.sender}
            loading={msg.loading}
          />
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 flex items-center">
        <input
          type="text"
          className="flex-1 p-2 bg-transparent rounded-lg outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUserInputMessage()}
        />
        <button
          onClick={handleUserInputMessage}
          className="ml-3 p-2 rounded-lg"
        >
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
};

// A simple component for the loading dots animation.
const LoadingDots = () => {
  return <span className="animate-pulse">...</span>;
};

// ChatBubble component now accepts an optional "loading" prop.
const ChatBubble = ({
  text,
  sender,
  loading,
}: {
  text: string;
  sender: string;
  loading?: boolean;
}) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && <FaRobot size={20} className="mr-2 text-white" />}
      <div
        className={`p-3 rounded-lg max-w-[60%] ${isUser ? "bg-purple" : "bg-gray"}`}
      >
        {loading ? <LoadingDots /> : <MarkdownRenderer markdown={text} />}
      </div>
      {isUser && <FaUser size={20} className="ml-2 text-white" />}
    </div>
  );
};

export default ChatWindow;
