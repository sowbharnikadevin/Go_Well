import React from 'react';

const AppointmentOrder = ({ time, date, doctor }) => {
  return (
    <div className="appointment-order">
      <h2>Appointment Details</h2>
      <p>Doctor: {doctor}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default AppointmentOrder;

