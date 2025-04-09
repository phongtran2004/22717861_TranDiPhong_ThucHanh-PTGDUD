import React from 'react';
import bellIcon from '../assets/img/bell-icon.png';
import questionIcon from '../assets/img/question-icon.png';
import searchIcon from '../assets/img/search-icon.png';
import avatar13 from '../assets/img/avatar13.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <span className="text-pink-500 font-bold text-2xl">DASHBOARD</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative w-100">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <img src={searchIcon} alt="Search" className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="w-10 h-10 flex items-center justify-center">
          <img src={bellIcon} alt="Bell" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <img src={questionIcon} alt="Question" />
        </div>

        <div className="relative">
          <img
            src={avatar13}
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="absolute top-0 right-0 w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;