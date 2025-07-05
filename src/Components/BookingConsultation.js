import React, { useState } from 'react';
import DoctorCard from './DoctorCard/DoctorCard';
// This import path is now corrected
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import './BookingConsultation.css';

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

const BookingConsultation = ({ showNotification }) => {
    // The unused 'doctors' and 'setDoctors' state has been removed for now
    const [filteredDoctors, setFilteredDoctors] = useState(allDoctors);

    const handleSearch = (searchText) => {
        if (searchText === '') {
            setFilteredDoctors(allDoctors);
        } else {
            const filtered = allDoctors.filter(
                (doctor) =>
                    doctor.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    doctor.specialty.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
        }
    };

    return (
        <div className="booking-consultation-container">
            <div className="find-doctor-search-container">
                <FindDoctorSearch onSearch={handleSearch} />
            </div>

            <div className="doctor-list-container">
                {filteredDoctors.map((doctor, index) => (
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