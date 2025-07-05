import React, { useState, useEffect } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
    const [user, setUser] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        // Retrieve user data from sessionStorage when the component mounts
        const email = sessionStorage.getItem('email');
        const name = sessionStorage.getItem('name');
        const phone = sessionStorage.getItem('phone');

        if (email && name && phone) {
            setUser({ name, email, phone });
        }
    }, []);

    return (
        <div className="profile-card">
            <div className="profile-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </div>
            <h2>User Profile</h2>
            <div className="profile-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
        </div>
    );
};

export default ProfileCard;