import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { v4 as uuidv4 } from 'uuid';

// Accept the showNotification prop from the parent component
const DoctorCard = ({ doctor, showNotification }) => {
    const [appointments, setAppointments] = useState([]);

    const handleFormSubmit = (appointmentData) => {
        const newAppointment = {
            id: uuidv4(),
            doctor, // Include doctor details
            ...appointmentData,
        };
        setAppointments([newAppointment]);
        
        // --- ADDED THIS LOGIC ---
        // Save to session storage for the "My Appointments" page
        sessionStorage.setItem('bookedAppointment', JSON.stringify(newAppointment));
        // Trigger the global notification
        if (showNotification) {
            showNotification(newAppointment);
        }
        // -------------------------
    };

    const handleCancel = () => {
        setAppointments([]);
        // --- ADDED THIS LOGIC ---
        // Clear the appointment from session storage
        sessionStorage.removeItem('bookedAppointment');
        // -------------------------
    };

    const renderStars = () => {
        return Array.from({ length: doctor.rating }, (_, i) => <span key={i}>⭐</span>);
    };

    return (
        <div className="doctor-card-container">
            <div className="doctor-card-profile-image-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            </div>
            <div className="doctor-card-details">
                <div className="doctor-card-detail-name">Dr. {doctor.name}</div>
                <div className="doctor-card-detail-speciality">{doctor.specialty}</div>
                <div className="doctor-card-detail-experience">{doctor.experience} years experience</div>
                <div className="doctor-card-detail-rating">{renderStars()}</div>
            </div>
            <div className="doctor-card-options-container">
                <Popup
                    trigger={
                        <button className="book-appointment-btn">
                            Book Appointment
                            <span>No Booking Fee</span>
                        </button>
                    }
                    modal
                    nested
                >
                    {(close) => (
                        <div className="modal-container">
                            <button className="close-modal-btn" onClick={close}>&times;</button>
                            <div className="modal-header">
                                <div className="doctor-card-detail-name">Dr. {doctor.name}</div>
                                <div className="doctor-card-detail-speciality">{doctor.specialty}</div>
                            </div>
                            {appointments.length > 0 ? (
                                <div className="appointment-details">
                                    <h3>Appointment Booked!</h3>
                                    {appointments.map((appointment) => (
                                        <div className="booked-info" key={appointment.id}>
                                            <p><strong>Name:</strong> {appointment.name}</p>
                                            <p><strong>Phone:</strong> {appointment.phoneNumber}</p>
                                            <p><strong>Date:</strong> {appointment.dateOfAppointment}</p>
                                            <p><strong>Time:</strong> {appointment.timeSlot}</p>
                                            <button className="cancel-btn" onClick={() => { handleCancel(); close(); }}>
                                                Cancel Appointment
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <AppointmentForm
                                    doctorName={doctor.name}
                                    doctorSpeciality={doctor.specialty}
                                    onSubmit={handleFormSubmit}
                                />
                            )}
                        </div>
                    )}
                </Popup>
            </div>
        </div>
    );
};

export default DoctorCard;