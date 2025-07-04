import React, { useState, useEffect } from 'react';
import './Appointments.css';

const Appointments = () => {
    const [bookedAppointments, setBookedAppointments] = useState([]);

    // This function checks session storage for the appointment
    const checkStorage = () => {
        const savedAppointment = sessionStorage.getItem('bookedAppointment');
        if (savedAppointment) {
            setBookedAppointments([JSON.parse(savedAppointment)]);
        } else {
            setBookedAppointments([]); // Clear if no appointment is found
        }
    };

    useEffect(() => {
        // Check storage when the page first loads
        checkStorage();

        // THIS IS THE FIX:
        // Add an event listener to check storage again if the user
        // navigates back to this page without a full refresh.
        window.addEventListener('focus', checkStorage);

        // Cleanup the event listener when the component is removed
        return () => {
            window.removeEventListener('focus', checkStorage);
        };
    }, []);

    return (
        <div className="appointments-container">
            <h2>My Appointments</h2>
            {bookedAppointments.length > 0 ? (
                <div className="appointments-list">
                    {bookedAppointments.map((appointment) => (
                        <div key={appointment.id} className="appointment-card">
                            <h3>Dr. {appointment.doctor.name}</h3>
                            <p>{appointment.doctor.specialty}</p>
                            <hr />
                            <p><strong>Patient:</strong> {appointment.name}</p>
                            <p><strong>Date:</strong> {appointment.dateOfAppointment}</p>
                            <p><strong>Time:</strong> {appointment.timeSlot}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-appointments-message">
                    You have no appointments scheduled.
                </p>
            )}
        </div>
    );
};

export default Appointments;