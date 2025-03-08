import React from "react";
import { FaPaperPlane, FaPaperclip, FaTimes } from "react-icons/fa";

const MessageInput = ({ input, setInput, image, setImage, handleUserInputMessage }) => {
  const handleSendMessage = () => {
    if (input.trim() || image) {
      handleUserInputMessage({ text: input, image });
      setInput("");
      setImage(null);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 flex flex-col border-t">
      {image && (
        <div className="relative mb-2">
          <img src={image} alt="Preview" className="w-32 h-32 object-cover rounded" />
          <button onClick={() => setImage(null)} className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">
            <FaTimes size={12} />
          </button>
        </div>
      )}
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 p-2 bg-transparent rounded-lg outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="imageUpload"
        />
        <label htmlFor="imageUpload" className="ml-3 p-2 cursor-pointer">
          <FaPaperclip size={18} />
        </label>
        <button onClick={handleSendMessage} className="ml-3 p-2 rounded-lg">
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
