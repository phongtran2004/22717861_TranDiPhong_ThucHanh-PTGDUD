import React from 'react';
import logo from '../assets/img/logo-icon.png';
import designIllustration from '../assets/img/design-illustration.png';

const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-md h-full p-4">
            <div className="flex items-center mb-6">
                <img src={logo} alt="" />
            </div>
            <ul className="space-y-4">
                <li className="bg-pink-500 text-white px-4 py-2 rounded-lg">DASHBOARD</li>
                <li className="text-gray-600 px-4 py-2">Projects</li>
                <li className="text-gray-600 px-4 py-2">Teams</li>
                <li className="text-gray-600 px-4 py-2">Analytics</li>
                <li className="text-gray-600 px-4 py-2">Messages</li>
                <li className="text-gray-600 px-4 py-2">Integrations</li>
            </ul>
            <div className="mt-10">
                <img src={designIllustration} alt="Illustration" className="w-full" />
                <p className="text-center mt-2">V2.0 IS AVAILABLE</p>
                <button className="w-full mt-2 bg-gray-200 py-2 rounded-lg">TRY NOW</button>
            </div>
        </div>
    );
};

export default Sidebar;