import React from 'react';

const DetailedReport = () => {
    const reports = [
        { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$559', date: '10/07/2023', status: 'New' },
        { name: 'Carlos Garcia', company: 'SnoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
        { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
        { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
        { name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
        { name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed' },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">DETAILED REPORT</h2>
                <div className="space-x-2">
                    <button className="text-pink-500">Import</button>
                    <button className="text-pink-500">Export</button>
                </div>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-500">
                        <th className="py-2">
                            <input type="checkbox" />
                        </th>
                        <th className="py-2">CUSTOMER NAME</th>
                        <th className="py-2">COMPANY</th>
                        <th className="py-2">ORDER VALUE</th>
                        <th className="py-2">ORDER DATE</th>
                        <th className="py-2">STATUS</th>
                        <th className="py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-2">
                                <input type="checkbox" />
                            </td>
                            <td className="py-2 flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <span>{report.name}</span>
                            </td>
                            <td className="py-2">{report.company}</td>
                            <td className="py-2">{report.value}</td>
                            <td className="py-2">{report.date}</td>
                            <td className="py-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${report.status === 'New'
                                        ? 'bg-blue-100 text-blue-500'
                                        : report.status === 'In-progress'
                                            ? 'bg-yellow-100 text-yellow-500'
                                            : 'bg-green-100 text-green-500'
                                        }`}
                                >
                                    {report.status}
                                </span>
                            </td>
                            <td className="py-2">
                                <button>✏️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <p>63 results</p>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-gray-200 rounded-full">◄</button>
                    <button className="px-3 py-1 bg-pink-500 text-white rounded-full">1</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">2</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">3</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">4</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">...</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">10</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">11</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-full">►</button>
                </div>
            </div>
        </div>
    );
};

export default DetailedReport;