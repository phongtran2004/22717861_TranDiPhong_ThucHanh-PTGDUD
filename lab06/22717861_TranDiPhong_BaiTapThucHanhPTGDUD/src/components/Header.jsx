import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
                <span className="text-pink-500 font-bold">DASHBOARD</span>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg px-3 py-1"
                />
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    );
};

export default Header;