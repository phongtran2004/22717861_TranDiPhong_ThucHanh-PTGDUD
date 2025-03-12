import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-[#1D2128FF]">
      <div className="text-white p-5 w-1/2">
        <div className="p-2 font-bold">
          <p>About us</p>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 mt-2 rounded-md"
          />
          <button
            type="button"
            className="mt-2 p-2 bg-pink-500 text-white font-bold rounded-md"
          >
            Send
          </button>
        </div>

        <div className="mt-12 flex text-center items-center justify-center space-x-4">
          <img src="../img/logo-footer.PNG" alt="Footer Logo" className="h-10" />
          <p>2023 Chefity Company</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>

      <div className="flex flex-col w-1/2 p-5">
        <div className="flex space-x-8">
          <div className="list1 space-y-2">
            <ul>
              <li>
                <a href="" className="font-bold text-gray-200">
                  Learn More
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200">
                  Our cooks
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="list2 space-y-2">
            <ul>
              <li>
                <a href="" className="font-bold text-gray-200">
                  Shop
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="" className="text-gray-200">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-200 mt-8">
          <ul>
            <li>
              <a href="" className="font-bold">
                Recipes
              </a>
            </li>
            <li>
              <a href="">What to cook this week</a>
            </li>
            <li>
              <a href="">Pasta</a>
            </li>
            <li>
              <a href="">Dinner</a>
            </li>
            <li>
              <a href="">Healthy</a>
            </li>
            <li>
              <a href="">Vegetarian</a>
            </li>
            <li>
              <a href="">Vegan</a>
            </li>
            <li>
              <a href="">Christmas</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
