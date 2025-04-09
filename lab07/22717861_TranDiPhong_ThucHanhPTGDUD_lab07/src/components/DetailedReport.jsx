import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import editIcon from '../assets/img/edit-icon.png';
import documentIcon from '../assets/img/document-icon.png';
import downloadIcon from '../assets/img/download-icon.png';
import shareIcon from '../assets/img/share-icon.png';

const DetailedReport = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        {
            header: <input type="checkbox" />,
            accessor: 'checkbox',
            render: () => <input type="checkbox" />
        },
        {
            header: 'CUSTOMER NAME',
            accessor: 'name',
            render: (row) => (
                <div className="flex items-center space-x-2">
                    <img
                        src={row.avatar}
                        alt={row.name}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{row.name}</span>
                </div>
            )
        },
        { header: 'COMPANY', accessor: 'company' },
        { header: 'ORDER VALUE', accessor: 'value' },
        { header: 'ORDER DATE', accessor: 'date' },
        {
            header: 'STATUS',
            accessor: 'status',
            render: (row) => (
                <span className={`px-3 py-1 rounded-full text-sm ${{
                    'New': 'bg-blue-100 text-blue-500',
                    'In-progress': 'bg-yellow-100 text-yellow-500',
                    'Completed': 'bg-green-100 text-green-500',
                }[row.status]}`}>
                    {row.status}
                </span>
            )
        },
        {
            header: '',
            accessor: 'actions',
            render: (row) => (
                <button >
                    <img src={editIcon} alt="Edit" />
                </button>
            )
        },
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Gọi API để lấy dữ liệu
                const response = await fetch('http://localhost:5000/users'); // API URL của bạn
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching users:', err);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // Chạy chỉ khi component mount

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <img
                        src={documentIcon}
                        alt="Document Icon"
                        className="w-6 h-6 mr-2"
                    />
                    <h2 className="text-lg font-semibold">DETAILED REPORT</h2>
                </div>
                <div className="flex items-center space-x-2 flex-nowrap">
                    <button
                        className="border border-pink-500 text-pink-500 hover:text-pink-600 hover:border-pink-600 transition-colors px-4 py-1 rounded-md flex items-center space-x-1"
                    >
                        <img src={downloadIcon} alt="Download" className="w-4 h-4" />
                        <span>Import</span>
                    </button>
                    <button
                        className="border border-pink-500 text-pink-500 hover:text-pink-600 hover:border-pink-600 transition-colors px-4 py-1 rounded-md flex items-center space-x-1"
                    >
                        <img src={shareIcon} alt="Share" className="w-4 h-4" />
                        <span>Export</span>
                    </button>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={users}
                showPagination={true}
                totalResults={users.length}
            />
        </div>
    );
};

export default DetailedReport;
