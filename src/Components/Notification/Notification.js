import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ details, onClose }) => {
  // Automatically close the notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!details) {
    return null;
  }

  return (
    <div className="notification-container">
      <button className="notification-close-btn" onClick={onClose}>
        &times;
      </button>
      <h4>Appointment Confirmed!</h4>
      <p>
        <strong>Patient:</strong> {details.name}
      </p>
      <p>
        <strong>Date:</strong> {details.dateOfAppointment}
      </p>
      <p>
        <strong>Time:</strong> {details.timeSlot}
      </p>
    </div>
  );
};

export default Notification;