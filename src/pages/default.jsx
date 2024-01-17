import './default.css';
import { Discalender } from './calender.jsx';

import React, { useState } from 'react';

function Default() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize selectedDate with current date

  const handleDateChange = (e) => {
    setSelectedDate(e.value); // Update selectedDate when the date changes
  };

  return (
    <div className="card flex justify-content-right">
      <div className="card-body">
        <h4 className="card-title">Choose the date</h4>
        <div className="container">
          <Discalender/>  
        </div>
      </div>
    </div>
  );
}

export default Default;
