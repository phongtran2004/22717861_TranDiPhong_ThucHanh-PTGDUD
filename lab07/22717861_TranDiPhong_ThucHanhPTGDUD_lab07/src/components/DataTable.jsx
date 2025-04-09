import React, { useState } from 'react';
import codeIcon from '../assets/img/code-icon.png';

const DataTable = ({ columns, data, showPagination = true, totalResults = 0 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Số bản ghi mỗi trang (có thể thay đổi)

    // Tính toán số trang
    const totalPages = Math.ceil(totalResults / itemsPerPage);

    // Lấy dữ liệu cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    // Xử lý chuyển trang
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // Tạo mảng các số trang để hiển thị
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="mt-1.5 rounded-lg shadow-sm overflow-x-auto">
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
                    {currentData.map((row, rowIndex) => (
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
            {showPagination && totalResults > 0 && (
                <div className="flex justify-between items-center mt-4 px-4 py-3 text-sm text-gray-600">
                    <span>
                        Showing {startIndex + 1} to {Math.min(endIndex, totalResults)} of {totalResults} results
                    </span>
                    <div className="flex space-x-1">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 bg-gray-100 rounded-full transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
                                }`}
                        >
                            <img src={codeIcon} alt="Next" className="w-4 h-4" />
                        </button>

                        {/* Hiển thị các nút số trang */}
                        {pageNumbers.map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageClick(page)}
                                className={`px-3 py-1 rounded-full transition-colors ${currentPage === page
                                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 bg-gray-100 rounded-full transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
                                }`}
                        >
                            <img src={codeIcon} alt="Next" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;