import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';
import { Route, Routes } from 'react-router-dom';


// App component is the main component of the application
// It contains the sidebar and the main content area
// The sidebar contains navigation links to different pages
// The main content area displays the currently selected page based on the URL route
function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <Header />

        {/* Sử dụng React Router, Chia ra thành các page, gom thành SPA */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;