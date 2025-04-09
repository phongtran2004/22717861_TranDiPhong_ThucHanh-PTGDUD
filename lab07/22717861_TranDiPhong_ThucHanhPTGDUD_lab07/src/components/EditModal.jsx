import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, report, onSave }) => {
    const [formData, setFormData] = useState(report || {});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (report) {
            setFormData(report);
        }
    }, [report, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.id) {
            setError('User ID is missing');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            console.log('Sending PUT request with data:', formData); // Debug
            const response = await fetch(`http://localhost:5000/users/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to update user: ${errorText}`);
            }

            const updatedData = await response.json();
            onSave(updatedData);
            onClose();
            console.log('Update successful:', updatedData); // Debug
        } catch (err) {
            setError(err.message);
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(75, 85, 99, 0.7)' }}
        >
            <div className="bg-white rounded-lg shadow-lg p-8 w-4/5 sm:w-1/3">
                <h2 className="text-2xl font-semibold mb-6 text-center">Edit Report</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter customer name"
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter company name"
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Order Value</label>
                        <input
                            type="text"
                            name="value"
                            value={formData.value || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter order value"
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Order Date</label>
                        <input
                            type="text"
                            name="date"
                            value={formData.date || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter order date (e.g., 10/07/2023)"
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            value={formData.status || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            disabled={loading}
                        >
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
                        <input
                            type="text"
                            name="avatar"
                            value={formData.avatar || ''}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-pink-200 focus:border-pink-500 transition duration-200"
                            placeholder="Enter avatar URL"
                            disabled={loading}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="border border-gray-300 rounded-md px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300 transition duration-200"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 transition duration-200"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;