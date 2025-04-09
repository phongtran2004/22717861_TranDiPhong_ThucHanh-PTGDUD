import React from 'react';

const DataTable = ({ columns, data, showPagination = true, totalResults = 0 }) => {
    return (
        <div className="rounded-lg shadow-md overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-500 bg-gray-50">
                        {columns.map((col, index) => (
                            <th key={index} className="py-2 px-4 font-medium uppercase text-sm">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-t hover:bg-gray-50">
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="py-3 px-4">
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
                <div className="flex justify-between items-center mt-4 px-4 pb-4 text-sm text-gray-600">
                    <span>{totalResults} results</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300">◄</button>
                        <button className="px-3 py-1 bg-pink-500 text-white rounded-full">1</button>
                        <button className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300">2</button>
                        <button className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300">►</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;
