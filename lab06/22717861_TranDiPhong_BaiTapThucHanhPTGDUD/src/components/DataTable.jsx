import React from 'react';

const DataTable = ({ columns, data, showPagination = true, totalResults = 0 }) => {
    return (
        <div className="rounded-lg shadow-sm overflow-x-auto">
            {/* Bảng */}
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-gray-600 bg-gray-100">
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className="py-3 px-4 font-semibold text-xs uppercase tracking-wide"
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="py-4 px-4 text-sm text-gray-700">
                                    {col.render ? col.render(row) : row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Phân trang */}
            {showPagination && (
                <div className="flex justify-between items-center mt-4 px-4 py-3 text-sm text-gray-600">
                    <span>{totalResults} results</span>
                    <div className="flex space-x-1">
                        <button className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                            ◄
                        </button>
                        <button className="px-3 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                            1
                        </button>
                        <button className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                            2
                        </button>
                        <button className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                            ►
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;