import React, { useEffect, useState, useCallback } from 'react';
import './InstantConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './DoctorCardIC/DoctorCardIC';

const InstantConsultation = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [allDoctors, setAllDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const navigate = useNavigate();

    // 1. Fetch all doctors once when the component first loads
    useEffect(() => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
            .then(res => res.json())
            .then(data => {
                setAllDoctors(data);
            })
            .catch(err => console.log(err));
    }, []); // Empty array means this runs only once

    // 2. This effect runs whenever the list of all doctors or the URL's search query changes
    useEffect(() => {
        const speciality = searchParams.get('speciality');
        if (speciality) {
            const filtered = allDoctors.filter(doctor =>
                doctor.speciality.toLowerCase().includes(speciality.toLowerCase())
            );
            setFilteredDoctors(filtered);
        } else {
            setFilteredDoctors([]); // If no speciality, show no doctors until searched
        }
    }, [searchParams, allDoctors]);

    // 3. This function is passed to the search component. It now just updates the URL.
    const handleSearch = (speciality) => {
        setSearchParams({ speciality: speciality });
    };

    return (
        <center>
            <div className="searchpage-container">
                <FindDoctorSearchIC onSearch={handleSearch} />
                <div className="search-results-container">
                    {/* Only show results if a search has been performed */}
                    {searchParams.get('speciality') && (
                        <center>
                            <h2>{filteredDoctors.length} doctors found</h2>
                            <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map(doctor => <DoctorCardIC className="doctorcard" {...doctor} key={doctor.name} />)
                            ) : (
                                <p>No doctors found for this specialty.</p>
                            )}
                        </center>
                    )}
                </div>
            </div>
        </center>
    );
}

export default InstantConsultation;