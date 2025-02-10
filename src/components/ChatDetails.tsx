import { FaFile, FaImage, FaBookOpen } from "react-icons/fa"; // Icons for Files, Media, and Lectures

const ChatDetails = () => {
  return (
    <div className="h-screen bg-black p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-4">Chat Details</h2>

      {/* Media Section */}
      <Section title="Media">
        <div className="flex gap-2">
          <MediaPreview />
          <MediaPreview />
          <MediaPreview />
          <MediaPreview />
        </div>
      </Section>

      {/* Shared Files Section */}
      <Section title="Shared Files">
        <FileItem name="Lecture_Notes.pdf" />
        <FileItem name="Assignment.docx" />
      </Section>

      {/* Lecture Snippets Section */}
      <Section title="Lecture Snippets">
        <LectureSnippet text="Linearisation is a way to approximate non-linear functions..." />
        <LectureSnippet text="Bayesian inference is used to update probabilities..." />
      </Section>
    </div>
  );
};

// Reusable Section Component
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="p-3 rounded-lg">{children}</div>
  </div>
);

// Media Preview Component
const MediaPreview = () => (
  <div className="w-12 h-12 bg-[#2e333d] flex items-center justify-center rounded-md">
    <FaImage size={20} className="text-[#6bafd]" />
  </div>
);

// File Item Component
const FileItem = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 p-2 bg-[#2e333d] rounded-lg mb-2">
    <FaFile size={16} className="text-[#6bafd]" />
    <span className="text-sm">{name}</span>
  </div>
);

// Lecture Snippet Component
const LectureSnippet = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 p-2 bg-[#2e333d] rounded-lg mb-2">
    <FaBookOpen size={16} className="text-[#6bafd]" />
    <span className="text-sm">{text}</span>
  </div>
);

export default ChatDetails;
