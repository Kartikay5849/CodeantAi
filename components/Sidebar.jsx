import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; 
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { CiSettings, CiCloudOn } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import Icon from "../src/assets/icon.svg";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar for larger screens (hidden below md) */}
      <div className={`md:w-64 w-full bg-white border-r border-gray-700 h-full transition-all duration-300 flex flex-col ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
        <div className="p-4 flex gap-2 border-b border-gray-700">
          <img src={Icon} alt="Codeant AI Icon" width="30" height="30" /> 
          <h1 className='text-2xl'>CodeAnt AI</h1>
        </div>
        <div className="p-4">
          <button className="w-full text-left px-4 py-2 rounded-md border flex justify-between items-center">
            UtkarshDhairyaPandey
            <span>&#x25BC;</span>
          </button>
        </div>

        <div className="flex-1 p-2">
          {[{ id: 1, name: 'Repositories', icon: IoHomeOutline },
            { id: 2, name: 'AI Code Review', icon: FaBook },
            { id: 3, name: 'Cloud Security', icon: CiCloudOn },
            { id: 4, name: 'How to Use', icon: FaBook },
            { id: 5, name: 'Settings', icon: CiSettings }]
            .map((option) => (
              <button
                key={option.id}
                className={`w-full text-left p-2 m-0.5 rounded-md flex items-center ${activeOption === option.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-600 hover:text-white'}`}
                onClick={() => handleOptionClick(option.id)}
              >
                <option.icon className={`mr-2 ${activeOption === option.id ? 'text-white' : 'stroke-black stroke-2'}`} />
                {option.name}
              </button>
            ))}
        </div>

        <div className="p-2 border-t border-gray-700 space-y-2">
          <button className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white">
            <IoCallOutline className='mt-1'/> Support
          </button>
          <button onClick={() => { navigate("/") }} className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white">
            <IoIosLogOut className='mt-1'/> Logout
          </button>
        </div>
      </div>

      {/* Mobile sidebar (middle of screen on small screens) */}
      <div className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white w-full sm:w-64 h-full p-4 relative">
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-gray-700 hover:text-black"
            onClick={toggleSidebar}
          >
            <HiX size={30} />
          </button>

          {/* Sidebar Content */}
          <div className="p-4 flex gap-2 border-b border-gray-700">
            <img src={Icon} alt="Codeant AI Icon" width="30" height="30" /> 
            <h1 className='text-2xl'>CodeAnt AI</h1>
          </div>
          <div className="p-4">
            <button className="w-full text-left px-4 py-2 rounded-md border flex justify-between items-center">
              UtkarshDhairyaPandey
              <span>&#x25BC;</span>
            </button>
          </div>

          <div className="flex-1 p-2 overflow-y-auto">
            {[{ id: 1, name: 'Repositories', icon: IoHomeOutline },
              { id: 2, name: 'AI Code Review', icon: FaBook },
              { id: 3, name: 'Cloud Security', icon: CiCloudOn },
              { id: 4, name: 'How to Use', icon: FaBook },
              { id: 5, name: 'Settings', icon: CiSettings }]
              .map((option) => (
                <button
                  key={option.id}
                  className={`w-full text-left p-2 m-0.5 rounded-md flex items-center ${activeOption === option.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-600 hover:text-white'}`}
                  onClick={() => handleOptionClick(option.id)}
                >
                  <option.icon className={`mr-2 ${activeOption === option.id ? 'text-white' : 'stroke-black stroke-2'}`} />
                  {option.name}
                </button>
              ))}
          </div>

          <div className="p-2 border-t border-gray-700 space-y-2">
            <button className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white">
              <IoCallOutline className='mt-1'/> Support
            </button>
            <button onClick={() => { navigate("/") }} className="w-full flex gap-2 text-left p-3 rounded-md hover:bg-blue-600 hover:text-white">
              <IoIosLogOut className='mt-1'/> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu button (top-right) */}
      <div className="md:hidden absolute top-4 right-4 p-2">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
