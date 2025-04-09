import React from 'react';
import DataTable from './DataTable';
import editIcon from '../assets//img/edit-icon.png';

const DetailedReport = () => {
    const reports = [
        { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$559', date: '10/07/2023', status: 'New' },
        { name: 'Carlos Garcia', company: 'SnoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
        { name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
        { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
        { name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
        { name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed' },
    ];

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
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
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
            render: () => <button><img src={editIcon} /></button>
        },
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
            <DataTable
                columns={columns}
                data={reports}
                showPagination={true}
                totalResults={63}
            />
        </div>
    );
};

export default DetailedReport;