import React from 'react'
import Overview from '../components/Overview';
import DetailedReport from '../components/DetailedReport';

const Dashboard = () => {
    return (
        <div>
            {/* Overview Section */}
            <Overview />

            {/* Detailed Report Section */}
            <DetailedReport />
        </div>
    )
}

export default Dashboard