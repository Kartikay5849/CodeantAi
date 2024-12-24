import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { CiSettings, CiCloudOn } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import Icon from "../src/assets/icon.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState(1);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setIsNavOpen(false); 
  };

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  const menuOptions = [
    { id: 1, name: "Repositories", icon: IoHomeOutline },
    { id: 2, name: "AI Code Review", icon: FaBook },
    { id: 3, name: "Cloud Security", icon: CiCloudOn },
    { id: 4, name: "How to Use", icon: FaBook },
    { id: 5, name: "Settings", icon: CiSettings },
  ];

  return (
    <div className="flex h-screen">
      <div className="hidden md:flex md:w-64 bg-white border-r border-gray-700 flex-col">
        <div className="p-4 flex items-center gap-2 border-b border-gray-700">
          <img src={Icon} alt="Codeant AI Icon" width="30" height="30" />
          <h1 className="text-2xl">CodeAnt AI</h1>
        </div>
        <div className="p-4">
          <button className="md:w-full text-left px-2 md:px-4 py-2 rounded-md border flex justify-between items-center">
            UtkarshDhairyaPandey
            <select
                className="w-full text-gray-800 text-sm font-medium px-3 py-2 rounded-md "
                defaultValue="UtkarshDhairyaPanwar"
              >
                <option value="Profile">Profile</option>
                <option value="Settings">Settings</option>
                <option value="Logout">Logout</option>
          </select>
          </button>
        </div>
        <div className="flex-1 p-2">
          {menuOptions.map((option) => (
            <button
              key={option.id}
              className={`w-full text-left p-2 m-0.5 rounded-md flex items-center ${
                activeOption === option.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-600 hover:text-white"
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <option.icon
                className={`mr-2 ${
                  activeOption === option.id
                    ? "text-white"
                    : "stroke-black stroke-2"
                }`}
              />
              {option.name}
            </button>
          ))}
        </div>
        <div className="p-2 border-t border-gray-700 space-y-2">
          <button className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white">
            <IoCallOutline className="mt-1" /> Support
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white"
          >
            <IoIosLogOut className="mt-1" /> Logout
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden w-full">
        <div className="fixed inset-x-0 top-0 flex items-center justify-between p-4 bg-white border-b border-gray-700 z-20">
          <div className="flex items-center gap-2">
            <img src={Icon} alt="Codeant AI Icon" width="30" height="30" />
            <h1 className="text-2xl">CodeAnt AI</h1>
          </div>
          <button onClick={toggleNav} className="z-30">
            {isNavOpen ? (
              <HiX size={24} className="text-black" />
            ) : (
              <HiMenu size={24} className="text-black" />
            )}
          </button>
        </div>

        {isNavOpen && (
          <div className="fixed inset-0 top-0 w-full h-screen bg-white flex flex-col z-10">
            <div className="flex-1 p-4 mt-16">
              <div className="flex items-center justify-between border-b pb-2 mb-4">
                <h2 className="text-xl font-medium">UtkarshDhairyaPanwar</h2>
              </div>
              {menuOptions.map((option) => (
                <button
                  key={option.id}
                  className={`w-full text-left p-2 m-0.5 rounded-md flex items-center ${
                    activeOption === option.id
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                  onClick={() => handleOptionClick(option.id)}
                >
                  <option.icon
                    className={`mr-2 ${
                      activeOption === option.id
                        ? "text-white"
                        : "stroke-black stroke-2"
                    }`}
                  />
                  {option.name}
                </button>
              ))}
            </div>
            <div className="p-2 border-t border-gray-700 space-y-2">
              <button className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white">
                <IoCallOutline className="mt-1" /> Support
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white"
              >
                <IoIosLogOut className="mt-1" /> Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
