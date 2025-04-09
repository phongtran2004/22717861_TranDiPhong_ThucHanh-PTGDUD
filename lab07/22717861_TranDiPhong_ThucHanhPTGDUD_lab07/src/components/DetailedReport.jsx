import React, { useState, useEffect } from 'react';
import EditModal from './EditModal';
import DataTable from './DataTable';
import editIcon from '../assets/img/edit-icon.png';
import documentIcon from '../assets/img/document-icon.png';
import downloadIcon from '../assets/img/download-icon.png';
import shareIcon from '../assets/img/share-icon.png';

const DetailedReport = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentReport, setCurrentReport] = useState(null);

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
                        src={`http://localhost:5000${row.avatar}`}
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
                <span
                    className={`px-3 py-1 rounded-full text-sm ${{
                        'New': 'bg-blue-100 text-blue-500',
                        'In-progress': 'bg-yellow-100 text-yellow-500',
                        'Completed': 'bg-green-100 text-green-500',
                    }[row.status]}`}
                >
                    {row.status}
                </span>
            )
        },
        {
            header: '',
            accessor: 'actions',
            render: (row) => (
                <button onClick={() => handleEditClick(row)}>
                    <img src={editIcon} alt="Edit" />
                </button>
            )
        },
    ];

    const handleEditClick = async (report) => {
        console.log('Clicked report:', report); // Kiểm tra report có id không
        try {
            const response = await fetch(`http://localhost:5000/users/${report.id}`);
            if (!response.ok) throw new Error('Failed to fetch user');
            const data = await response.json();
            console.log('Fetched user data:', data); // Kiểm tra dữ liệu từ API
            setCurrentReport(data);
            setIsEditModalOpen(true);
        } catch (err) {
            console.error('Error fetching user details:', err);
            setCurrentReport(report); // Dùng dữ liệu từ row nếu lỗi
            setIsEditModalOpen(true);
        }
    };

    const handleEditModalClose = () => {
        setIsEditModalOpen(false);
        setCurrentReport(null);
    };

    const handleSaveEdit = (updatedReport) => {
        console.log('Updated report:', updatedReport); // Kiểm tra dữ liệu cập nhật
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedReport.id ? updatedReport : user
            )
        );
        handleEditModalClose();
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/users');
                if (!response.ok) throw new Error('Failed to fetch users');
                const data = await response.json();
                console.log('Initial users data:', data); // Kiểm tra dữ liệu ban đầu
                setUsers(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching users:', err);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

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
            <EditModal
                isOpen={isEditModalOpen}
                onClose={handleEditModalClose}
                report={currentReport}
                onSave={handleSaveEdit}
            />
        </div>
    );
};

export default DetailedReport;