import React from "react";

const Header = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <img src="../img/logo.PNG" alt="Logo" className="h-10" />
        <div className="flex items-center h-10 w-96 bg-[#f5f5f5] rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="border-none p-2 w-full bg-[#f5f5f5] rounded-md"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center space-x-6">
        <div className="nav">
          <ul className="flex space-x-5">
            <li>
              <a href="" className="text-gray-500 hover:text-blue-500">
                What to cook
              </a>
            </li>
            <li>
              <a href="" className="text-gray-500 hover:text-blue-500">
                Recipes
              </a>
            </li>
            <li>
              <a href="" className="text-gray-500 hover:text-blue-500">
                Ingredients
              </a>
            </li>
            <li>
              <a href="" className="text-gray-500 hover:text-blue-500">
                Occasions
              </a>
            </li>
            <li>
              <a href="" className="text-gray-500 hover:text-blue-500">
                About us
              </a>
            </li>
          </ul>
        </div>

        <div className="recipe-box flex items-center space-x-2 bg-pink-100 p-3 rounded-md">
          <img src="../img/box.PNG" alt="Recipe Box" className="h-8" />
          <a href="" className="text-red-600 text-lg">
            Your Recipe Box
          </a>
        </div>

        <div className="avatar">
          <img
            src="../img/avatar.PNG"
            alt="Avatar"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
