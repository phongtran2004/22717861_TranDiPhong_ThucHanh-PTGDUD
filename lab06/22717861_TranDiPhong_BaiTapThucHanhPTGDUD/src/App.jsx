import React from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import DetailedReport from './components/DetailedReport';
import Header from './components/Header';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <Header />

        {/* Overview Section */}
        <Overview />

        {/* Detailed Report Section */}
        <DetailedReport />
      </div>
    </div>
  );
}

export default App;