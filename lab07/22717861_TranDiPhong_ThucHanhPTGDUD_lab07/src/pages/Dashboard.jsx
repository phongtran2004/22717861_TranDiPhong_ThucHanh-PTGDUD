// pages/Dashboard.js
import React from 'react';
import Overview from '../components/Overview';
import DetailedReport from '../components/DetailedReport';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Overview />
      <DetailedReport />
    </div>
  );
};

export default Dashboard;
