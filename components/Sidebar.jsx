import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Icons for the menu toggle
import { IoHomeOutline,IoCallOutline } from "react-icons/io5";
import { CiSettings, CiCloudOn } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar visibility for mobile
  const [activeOption, setActiveOption] = useState(1); // Default active option

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-16'
        } border border-[#000000] h-full transition-all duration-300 flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-4 text-center border-b border-gray-700">
          {isOpen ? (
            <img
              src="your-logo-url-here.png"
              alt="Logo"
              className="w-12 mx-auto"
            />
          ) : (
            <div className="text-lg font-bold">CA</div>
          )}
        </div>

        <div className="p-4 border-b border-gray-700">
          <button className="w-full text-left px-4 py-2 rounded-md border border-[#383839] flex justify-between items-center">
            UtkarshDhairyaPandey
            <span>&#x25BC;</span>
          </button>
        </div>

        <div className="flex-1 p-2">
          {[
            { id: 1, name: 'Repositories', icon: IoHomeOutline },
            { id: 2, name: 'AI Code Review', icon: FaBook },
            { id: 3, name: 'Cloud Security', icon: CiCloudOn },
            { id: 4, name: 'How to Use', icon: FaBook },
            { id: 5, name: 'Settings', icon: CiSettings },
          ].map((option) => (
            <button
              key={option.id}
              className={`w-full text-left p-2 m-0.5 rounded-md flex items-center ${
                activeOption === option.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-600 hover:text-white'
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <option.icon
                className={`mr-2 ${
                  activeOption === option.id
                    ? 'text-white'
                    : ' stroke-black stroke-2'
                }`}
              />
              {option.name}
            </button>
          ))}
        </div>

        <div className="p-2 border-t border-gray-700 space-y-2">
          <button className="w-full flex gap-2  text-left p-3 rounded-md hover:bg-blue-600 hover:text-white">
           <IoCallOutline className='mt-1'/> Support
          </button>
          <button className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white">
            <IoIosLogOut className='mt-1'/> Logout
          </button>
        </div>
      </div>

      <div className="absolute top-4 left-4 md:hidden z-10">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 hover:text-white focus:outline-none"
        >
          {isOpen ? (
            <HiX className="w-6 h-6 text-white" />
          ) : (
            <HiMenu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
