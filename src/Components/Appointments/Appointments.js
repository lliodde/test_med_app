import React, { useState, useEffect } from 'react';
import './Appointments.css';

const Appointments = () => {
    const [bookedAppointment, setBookedAppointment] = useState(null);

    useEffect(() => {
        const checkStorage = () => {
            const savedAppointment = sessionStorage.getItem('bookedAppointment');
            if (savedAppointment) {
                setBookedAppointment(JSON.parse(savedAppointment));
            } else {
                setBookedAppointment(null);
            }
        };

        checkStorage();
        window.addEventListener('focus', checkStorage);
        return () => window.removeEventListener('focus', checkStorage);
    }, []);

    return (
        <div className="appointments-container">
            <h2>My Appointments</h2>
            {bookedAppointment ? (
                <div className="appointments-list">
                    <div className="appointment-card">
                        <h3>Dr. {bookedAppointment.doctor.name}</h3>
                        <p>{bookedAppointment.doctor.specialty}</p>
                        <hr />
                        <p><strong>Patient:</strong> {bookedAppointment.name}</p>
                        <p><strong>Date:</strong> {bookedAppointment.dateOfAppointment}</p>
                        <p><strong>Time:</strong> {bookedAppointment.timeSlot}</p>
                    </div>
                </div>
            ) : (
                <p className="no-appointments-message">You have no appointments scheduled.</p>
            )}
        </div>
    );
};

export default Appointments;