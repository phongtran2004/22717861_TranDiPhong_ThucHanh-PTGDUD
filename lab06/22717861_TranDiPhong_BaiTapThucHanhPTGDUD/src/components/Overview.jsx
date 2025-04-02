import React from 'react';

const Overview = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-500">TURNOVER</p>
                        <p className="text-2xl font-bold">$92,405</p>
                        <p className="text-green-500">▲ 5.39% period of change</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-500">📊</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-500">PROFIT</p>
                        <p className="text-2xl font-bold">$32,218</p>
                        <p className="text-green-500">▲ 5.39% period of change</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-500">💰</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-500">NEW CUSTOMER</p>
                        <p className="text-2xl font-bold">298</p>
                        <p className="text-green-500">▲ 6.84% period of change</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-500">👥</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;