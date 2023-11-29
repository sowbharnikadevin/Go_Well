import React from 'react';

const AppointmentOrder = ({ time, date, doctor }) => {
  return (
    <div className="appointment-order">
      <h2>Appointment Details</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Doctor: {doctor}</p>
    </div>
  );
};

export default AppointmentOrder;

