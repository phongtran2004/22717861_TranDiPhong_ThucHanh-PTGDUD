import React, { useState, useEffect } from 'react';
import cartIcon from '../assets/img/cart-icon.png';
import dollarIcon from '../assets/img/dollar-icon.png';
import userIcon from '../assets/img/user-icon.png';
import overviewIcon from '../assets/img/overview.png'; 

const Overview = () => {
  const [overviewData, setOverviewData] = useState({
    turnover: { value: '$0', change: '0%' },
    profit: { value: '$0', change: '0%' },
    customers: { value: '0', change: '0%' },
  });

  useEffect(() => {
    // Fetch dữ liệu từ json-server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/overview');
        const data = await response.json();
        setOverviewData(data);
      } catch (err) {
        console.error('Error fetching overview:', err);
      }
    };

    fetchData();
  }, []); // Chỉ gọi một lần khi component mount

  return (
    <div className="mb-6">
      {/* Title Overview với icon */}
      <div className="flex items-center mb-4">
        <img src={overviewIcon} alt="Overview Icon" className="w-6 h-6 mr-2" />
        <h2 className="text-lg font-bold text-gray-800">OVERVIEW</h2>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">TURNOVER</p>
              <p className="text-2xl font-bold">{overviewData.turnover.value}</p>
              <p className="text-green-500 text-sm">{overviewData.turnover.change} period of change</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={cartIcon} alt="cart" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">PROFIT</p>
              <p className="text-2xl font-bold">{overviewData.profit.value}</p>
              <p className="text-green-500 text-sm">{overviewData.profit.change} period of change</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={dollarIcon} alt="dollar" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">NEW CUSTOMER</p>
              <p className="text-2xl font-bold">{overviewData.customers.value}</p>
              <p className="text-green-500 text-sm">{overviewData.customers.change} period of change</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={userIcon} alt="user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
