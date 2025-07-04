import React, { useState } from 'react';
import DoctorCard from './DoctorCard/DoctorCard';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import './BookingConsultation.css';

// Your expanded list of sample doctors
const allDoctors = [
    { name: 'Jiao Yang', specialty: 'Dentist', experience: 9, rating: 5 },
    { name: 'Denis Raj', specialty: 'Dentist', experience: 24, rating: 4 },
    { name: 'Jane Smith', specialty: 'Gynecologist/obstetrician', experience: 15, rating: 5 },
    { name: 'John Doe', specialty: 'General Physician', experience: 10, rating: 4 },
    { name: 'Emily White', specialty: 'Dermatologist', experience: 7, rating: 5 },
    { name: 'David Chen', specialty: 'Ear-nose-throat (ent) Specialist', experience: 18, rating: 4 },
    { name: 'Priya Sharma', specialty: 'Homeopath', experience: 12, rating: 5 },
    { name: 'Carlos Garcia', specialty: 'Ayurveda', experience: 20, rating: 4 },
    { name: 'Susan Miller', specialty: 'General Physician', experience: 22, rating: 5 },
    { name: 'Michael Brown', specialty: 'Dermatologist', experience: 14, rating: 4 },
    { name: 'Linda Wilson', specialty: 'Dentist', experience: 5, rating: 4 },
    { name: 'Robert Jones', specialty: 'Gynecologist/obstetrician', experience: 8, rating: 4 },
    { name: 'Mary Williams', specialty: 'General Physician', experience: 30, rating: 5 },
    { name: 'Ken Johnson', specialty: 'Ear-nose-throat (ent) Specialist', experience: 11, rating: 5 },
    { name: 'Patricia Davis', specialty: 'Homeopath', experience: 16, rating: 4 },
    { name: 'James Rodriguez', specialty: 'Ayurveda', experience: 9, rating: 5 },
    { name: 'Jennifer Martinez', specialty: 'Dermatologist', experience: 19, rating: 5 },
    { name: 'Charles Hernandez', specialty: 'General Physician', experience: 13, rating: 4 }
];

// This is the correct, single definition of the component
// It accepts the showNotification prop from App.js
const BookingConsultation = ({ showNotification }) => {
    const [doctors] = useState(allDoctors);

    return (
        <div className="booking-consultation-container">
            {/* Render the search component */}
            <div className="find-doctor-search-container">
                <FindDoctorSearch />
            </div>

            {/* Render the list of doctor cards */}
            <div className="doctor-list-container">
                {doctors.map((doctor, index) => (
                    // Pass the showNotification function down to each DoctorCard
                    <DoctorCard 
                        key={index} 
                        doctor={doctor} 
                        showNotification={showNotification} 
                    />
                ))}
            </div>
        </div>
    );
};

export default BookingConsultation;