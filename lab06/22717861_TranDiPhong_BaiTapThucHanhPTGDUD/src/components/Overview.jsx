import React, { useState, useEffect } from 'react';

const Overview = () => {
    const [overviewData, setOverviewData] = useState({
        turnover: { value: '$0', change: '0%' },
        profit: { value: '$0', change: '0%' },
        customers: { value: '0', change: '0%' }
    });

    useEffect(() => {
        // Fake API call
        const fetchData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        turnover: { value: '$92,405', change: '▲ 5.39%' },
                        profit: { value: '$32,218', change: '▲ 5.39%' },
                        customers: { value: '298', change: '▲ 6.84%' }
                    });
                }, 1000); // Giả lập độ trễ mạng 1 giây
            });
        };

        fetchData()
            .then(data => setOverviewData(data))
            .catch(err => console.error('Error fetching overview:', err));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-500">TURNOVER</p>
                        <p className="text-2xl font-bold">{overviewData.turnover.value}</p>
                        <p className="text-green-500">{overviewData.turnover.change} period of change</p>
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
                        <p className="text-2xl font-bold">{overviewData.profit.value}</p>
                        <p className="text-green-500">{overviewData.profit.change} period of change</p>
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
                        <p className="text-2xl font-bold">{overviewData.customers.value}</p>
                        <p className="text-green-500">{overviewData.customers.change} period of change</p>
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