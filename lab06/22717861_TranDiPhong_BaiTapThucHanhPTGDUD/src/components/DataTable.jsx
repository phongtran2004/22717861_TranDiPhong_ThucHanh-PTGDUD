import React from 'react';

const DataTable = ({ columns, data, showPagination = true, totalResults = 0 }) => {
    const getStatusStyle = (status) => ({
        'New': 'bg-blue-100 text-blue-500',
        'In-progress': 'bg-yellow-100 text-yellow-500',
        'Completed': 'bg-green-100 text-green-500',
    }[status] || '');

    return (
        <div className="rounded-lg shadow-md">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-500">
                        {columns.map((col, index) => (
                            <th key={index} className="py-2 px-4">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-t">
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="py-2 px-4">
                                    {col.render
                                        ? col.render(row)
                                        : row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPagination && (
                <div className="flex justify-between items-center mt-4 px-4 pb-4">
                    <span>{totalResults} results</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-gray-200 rounded-full">◄</button>
                        <button className="px-3 py-1 bg-pink-500 text-white rounded-full">1</button>
                        <button className="px-3 py-1 bg-gray-200 rounded-full">2</button>
                        <button className="px-3 py-1 bg-gray-200 rounded-full">►</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;