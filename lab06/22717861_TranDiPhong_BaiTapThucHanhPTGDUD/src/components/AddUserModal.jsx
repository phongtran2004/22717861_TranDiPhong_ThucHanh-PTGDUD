import React, { useState } from 'react';

const AddUserModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        value: '',
        date: '',
        status: 'New' // Mặc định status là "New"
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(75, 85, 99, 0.7)' }}>
            <div className="bg-white rounded-lg shadow-lg p-8 w-4/5 sm:w-1/3">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter customer name"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter company name"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Order Value</label>
                        <input
                            type="text"
                            name="value"
                            value={formData.value}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter order value (e.g., $500)"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Order Date</label>
                        <input
                            type="text"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter order date (e.g., 10/07/2023)"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                        >
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="border border-gray-300 rounded-md px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 transition duration-200"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUserModal;