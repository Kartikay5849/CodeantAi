import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Icons for hamburger

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState(1); // Default active option
  const [isOpen, setIsOpen] = useState(true); // Sidebar visibility for mobile

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-0'
        } bg-white h-screen border-r border-black transition-all duration-300`}
      >
        <div className="p-6 text-center ">
          <img src="your-logo-url-here.png" alt="Logo" className="w-16 mx-auto" />
        </div>

        <div className="p-6">
          <button className=" border border-gray-400 px-8 py-2 rounded-md hover:text-gray-700">
            Username <span className="ml-2">&#x25BC;</span>
          </button>
          <div className="mt-2 rounded-md  ">
            <p className=" p-2">Profile</p>
            <p className=" p-2">Settings</p>
            <p className=" p-2">Log Out</p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full p-4 text-center space-y-2">
          <button className="w-full text-left p-3 hover:bg-gray-600">Option 6</button>
          <button className="w-full text-left p-3 hover:bg-gray-600">Option 7</button>
        </div>
      </div> 
      <div className="absolute top-6 right-6 lg:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? (
            <HiX className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
