import ChatDetails from "@/components/ChatDetails";
import Chats from "@/components/Chats";
import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="bg-blueishGray flex flex-1">
        <Chats />
        <ChatWindow />
      </div>
      <ChatDetails />
    </main>
  );
}
