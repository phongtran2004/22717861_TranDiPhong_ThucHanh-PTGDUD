// components/Overview.js
import React from 'react';

const Overview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white shadow-lg">
      <div className="bg-blue-200 p-4 rounded">
        <h3 className="text-xl font-bold">Item 1</h3>
        <p>Some content for item 1.</p>
      </div>
      <div className="bg-blue-200 p-4 rounded">
        <h3 className="text-xl font-bold">Item 2</h3>
        <p>Some content for item 2.</p>
      </div>
      <div className="bg-blue-200 p-4 rounded">
        <h3 className="text-xl font-bold">Item 3</h3>
        <p>Some content for item 3.</p>
      </div>
    </div>
  );
};

export default Overview;
