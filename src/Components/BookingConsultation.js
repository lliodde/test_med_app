import React, { useState } from 'react';
import DoctorCard from './DoctorCard/DoctorCard';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import './BookingConsultation.css';

// Sample doctors data
const allDoctors = [
    { name: 'Jiao Yang', specialty: 'Dentist', experience: 9, rating: 5 },
    { name: 'Denis Raj', specialty: 'Dentist', experience: 24, rating: 4 },
    { name: 'Jane Smith', specialty: 'Gynecologist/obstetrician', experience: 15, rating: 5 },
    { name: 'John Doe', specialty: 'General Physician', experience: 10, rating: 4 },
    { name: 'Emily White', specialty: 'Dermatologist', experience: 7, rating: 5 },
];

const BookingConsultation = () => {
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
                    <DoctorCard key={index} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default BookingConsultation;