import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import EditModal from './EditModal';
import AddUserModal from './AddUserModal';
import editIcon from '../assets/img/edit-icon.png';
import documentIcon from '../assets/img/document-icon.png';
import downloadIcon from '../assets/img/download-icon.png';
import shareIcon from '../assets/img/share-icon.png';
import avatar1 from '../assets/img/avatar1.png';
import avatar2 from '../assets/img/avatar2.png';
import avatar3 from '../assets/img/avatar3.png';
import avatar4 from '../assets/img/avatar4.png';
import avatar5 from '../assets/img/avatar5.png';
import avatar6 from '../assets/img/avatar6.png';

const DetailedReport = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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
                <button onClick={() => handleEditClick(row)}>
                    <img src={editIcon} alt="Edit" />
                </button>
            )
        },
    ];

    const handleEditClick = (report) => {
        setCurrentReport(report);
        setIsEditModalOpen(true);
    };

    const handleEditModalClose = () => {
        setIsEditModalOpen(false);
        setCurrentReport(null);
    };

    const handleAddModalOpen = () => {
        setIsAddModalOpen(true);
    };

    const handleAddModalClose = () => {
        setIsAddModalOpen(false);
    };

    const handleSaveEdit = (updatedReport) => {
        setReports(prevReports =>
            prevReports.map(report =>
                report.name === updatedReport.name ? updatedReport : report
            )
        );
    };

    const handleAddUser = (newUser) => {
        setReports(prevReports => [
            ...prevReports,
            { ...newUser, avatar: avatar1 }
        ]);
    };

    useEffect(() => {
        const fetchReports = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$559', date: '10/07/2023', status: 'New', avatar: avatar1 },
                        { name: 'Carlos Garcia', company: 'SnoozeShift', value: '$747', date: '24/07/2023', status: 'New', avatar: avatar2 },
                        { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress', avatar: avatar3 },
                        { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress', avatar: avatar4 },
                        { name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed', avatar: avatar5 },
                        { name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed', avatar: avatar6 },
                    ]);
                }, 1000);
            });
        };

        fetchReports()
            .then(data => {
                setReports(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching reports:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                {/* Tiêu đề với icon document */}
                <div className="flex items-center">
                    <img
                        src={documentIcon}
                        alt="Document Icon"
                        className="w-6 h-6 mr-2"
                    />
                    <h2 className="text-lg font-semibold">DETAILED REPORT</h2>
                </div>
                <div className="flex items-center space-x-2 flex-nowrap">
                    {/* Button Import với downloadIcon */}
                    <button
                        className="border border-pink-500 text-pink-500 hover:text-pink-600 hover:border-pink-600 transition-colors px-4 py-1 rounded-md flex items-center space-x-1"
                    >
                        <img src={downloadIcon} alt="Download" className="w-4 h-4" />
                        <span>Import</span>
                    </button>
                    {/* Button Export với shareIcon */}
                    <button
                        className="border border-pink-500 text-pink-500 hover:text-pink-600 hover:border-pink-600 transition-colors px-4 py-1 rounded-md flex items-center space-x-1"
                    >
                        <img src={shareIcon} alt="Share" className="w-4 h-4" />
                        <span>Export</span>
                    </button>
                    {/* Button Add User */}
                    <button
                        onClick={handleAddModalOpen}
                        className="border border-pink-500 text-pink-500 hover:text-pink-600 hover:border-pink-600 transition-colors px-4 py-1 rounded-md"
                    >
                        Add User
                    </button>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={reports}
                showPagination={true}
                totalResults={reports.length}
            />
            <EditModal
                isOpen={isEditModalOpen}
                onClose={handleEditModalClose}
                report={currentReport}
                onSave={handleSaveEdit}
            />
            <AddUserModal
                isOpen={isAddModalOpen}
                onClose={handleAddModalClose}
                onSave={handleAddUser}
            />
        </div>
    );
};

export default DetailedReport;