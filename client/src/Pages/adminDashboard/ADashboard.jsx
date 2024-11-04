import Widget from './adminComponent/widget';
import BookingsEarningsGraph from './adminComponent/BookingsEarningsGraph';
import "./ADashboard.css"; // Add your own styling

import { useState } from 'react';

const ADashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`Adashboard ${isDarkMode ? 'dark' : ''}`}>
  <h2 className="m-6 text-[56px] font-extrabold uppercase
    text-primary-color dark:text-white">
    Dashboard
  </h2>

      <div className="flex p-[20px] w-[100%] gap-[20px]">
        <Widget type="user" />
        <Widget type="mechanic" />
        <Widget type="earning" />
        <Widget type="booking" />
      </div>

      <div className="mt-8">
        <BookingsEarningsGraph />
      </div>
    </div>
  );
};

export default ADashboard;
