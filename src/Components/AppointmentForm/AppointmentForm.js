import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfAppointment, setDateOfAppointment] = useState('');
    const [timeSlot, setTimeSlot] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, dateOfAppointment, timeSlot });
    };

    return (
        <div className="appointment-form-container">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date of Appointment</label>
                    <input type="date" id="date" value={dateOfAppointment} onChange={(e) => setDateOfAppointment(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="time-slot">Book Time Slot</label>
                    <select id="time-slot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
                        <option value="" disabled>Select a time slot</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                    </select>
                </div>
                <button type="submit" className="book-now-btn">Book Now</button>
            </form>
        </div>
    );
};

export default AppointmentForm;