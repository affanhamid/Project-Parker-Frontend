import { FaCommentDots } from "react-icons/fa"; // Chat icon

const Chats = () => {
  // Example chat messages
  const chatMessages = [
    { id: 1, question: "What is linearisation?", time: "4m" },
    { id: 2, question: "How does Bayesian inference work?", time: "10m" },
    { id: 3, question: "What is a Markov Chain?", time: "15m" },
    { id: 4, question: "Explain eigenvalues and eigenvectors", time: "20m" },
    { id: 5, question: "What is a neural network?", time: "25m" },
  ];

  return (
    <div className="h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Chats</h2>

      <div className="flex flex-col gap-3">
        {chatMessages.map((chat) => (
          <ChatItem key={chat.id} question={chat.question} time={chat.time} />
        ))}
      </div>
    </div>
  );
};

// Individual Chat Item Component
const ChatItem = ({ question, time }: { question: string; time: string }) => {
  return (
    <div className="flex items-center p-3 rounded-lg gap-3 cursor-pointer">
      <FaCommentDots className="w-10 h-10 text-white" />
      <div className="flex flex-col">
        <span className="font-medium whitespace-nowrap">{question}</span>
        <span className="text-sm opacity-70">{time} ago</span>
      </div>
    </div>
  );
};

export default Chats;
