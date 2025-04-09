import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo-icon.png';
import designIllustration from '../assets/img/design-illustration.png';

const Sidebar = () => {
    const navItems = [
        { to: '/', label: 'DASHBOARD' }, // Trang mặc định
        { to: '/projects', label: 'Projects' },
        { to: '/teams', label: 'Teams' },
        { to: '/analytics', label: 'Analytics' },
        { to: '/messages', label: 'Messages' },
        { to: '/integrations', label: 'Integrations' },
    ];

    return (
        <div className="w-64 bg-white shadow-md h-screen p-4 flex flex-col">
            <div className="flex items-center mb-6">
                <img src={logo} alt="Logo" className="h-8" />
            </div>
            <nav>
                <ul className="space-y-2"> {/* Giảm space-y-4 xuống space-y-2 để gọn hơn */}
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `block w-full px-4 py-2 rounded-lg ${isActive
                                        ? 'bg-pink-500 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`
                                }
                                end={item.to === '/'} // Đảm bảo "/" chỉ active khi chính xác
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-auto">
                {/* Container bọc toàn bộ phần illustration, text, và button */}
                <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
                    <img
                        src={designIllustration}
                        alt="Illustration"
                        className="mb-2"
                    />
                    <p className="text-center text-sm font-semibold text-gray-700 mb-2">
                        V2.0 IS AVAILABLE
                    </p>
                    <button className="w-full bg-white border border-blue-500 text-blue-500 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                        TRY NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;