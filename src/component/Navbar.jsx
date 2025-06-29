import React, { useState, useRef, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full shadow-sm">
      {/* Top Contact Bar */}
      <div className="flex justify-between items-center bg-gray-100 text-sm px-6 py-2">
        {/* Left: Phone and Email */}
        <div className="flex items-center space-x-4 p-2">
          <div className="flex px-2 ml-2 items-center space-x-1 text-blue-700">
            <FaPhone />
            <span className='text-black'>+4444444444</span>
          </div>
          <div className="flex items-center space-x-1 text-blue-700">
            <FaEnvelope />
            <span className='text-black'>example@gmail.com</span>
          </div>
        </div>
        {/* Right: Social Icons */}
        <div className="flex px-2 mr-2 text-2xl items-center space-x-3 text-blue-700">
          <FaFacebookF className="cursor-pointer hover:text-blue-900" />
          <FaInstagram className="cursor-pointer hover:text-pink-600" />
          <FaTwitter className="cursor-pointer hover:text-blue-500" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-800" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-around items-center px-6 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">DEMO</h1>

        {/* Menu Items */}
        <nav className="flex space-x-10 text-md font-medium relative" ref={navRef}>
          {/* Health */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('health')}
              className="hover:text-blue-700 flex items-center space-x-1"
              type="button"
            >
              <span>Health</span>
              {openDropdown === 'health' ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {openDropdown === 'health' && (
              <div className="absolute w-[200px] h-[100px] flex flex-col justify-center rounded bg-gray-100 shadow p-2 mt-1 space-y-1 z-10">
                <p className="hover:text-blue-600 cursor-pointer">Health Plan 1</p>
                <p className="hover:text-blue-600 cursor-pointer">Health Plan 2</p>
              </div>
            )}
          </div>

          {/* Motor */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('motor')}
              className="hover:text-blue-700 flex items-center space-x-1"
              type="button"
            >
              <span>Motor</span>
              {openDropdown === 'motor' ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {openDropdown === 'motor' && (
              <div className="absolute w-[200px] h-[100px] flex flex-col justify-center rounded bg-gray-100 shadow p-2 mt-1 space-y-1 z-10">
                <p className="hover:text-blue-600 cursor-pointer">Car Insurance</p>
                <p className="hover:text-blue-600 cursor-pointer">Bike Insurance</p>
              </div>
            )}
          </div>

          {/* Others */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('others')}
              className="hover:text-blue-700 flex items-center space-x-1"
              type="button"
            >
              <span>Others</span>
              {openDropdown === 'others' ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {openDropdown === 'others' && (
              <div className="absolute w-[200px] h-[100px] flex flex-col justify-center rounded bg-gray-100 shadow p-2 mt-1 space-y-1 z-10">
                <p className="hover:text-blue-600 cursor-pointer">Travel Insurance</p>
                <p className="hover:text-blue-600 cursor-pointer">Home Insurance</p>
              </div>
            )}
          </div>

          {/* Raise A Claim */}
          <button className="hover:text-blue-700" type="button">Raise A Claim</button>
        </nav>
        {/* Login Button */}
        <button className="bg-blue-600 font-medium w-[130px] h-[35px] text-center text-white  rounded-full hover:bg-blue-700">Log in</button>
      </div>
    </div>
  );
}