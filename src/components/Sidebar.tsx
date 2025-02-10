import { FaCog } from "react-icons/fa"; // Settings icon
import { FaFolder } from "react-icons/fa"; // Folder icon for subjects

const Sidebar = () => {
  return (
    <div className="h-screen bg-black flex flex-col px-4 py-7 items-center">
      {/* Logo */}
      <div className="text-lg font-bold text-center mb-4">PARKER</div>

      {/* Subject List */}
      <div className="flex flex-1 flex-col gap-4 pt-40">
        <Subject name="MA100" />
        <Subject name="MA102" />
        <Subject name="EC1A3" />
        <Subject name="ST202" />
      </div>

      {/* Settings */}
      <div className="text-center mt-4">
        <FaCog size={24} className="mx-auto cursor-pointer" />
      </div>
    </div>
  );
};

// Subject Component (Inside Same File)
const Subject = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 cursor-pointer">
      <FaFolder size={20} className="mr-2 text-white" />
      <span>{name}</span>
    </div>
  );
};

export default Sidebar;
