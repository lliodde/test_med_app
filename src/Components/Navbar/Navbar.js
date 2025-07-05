import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = sessionStorage.getItem('auth-token');
        if (authToken) {
            setIsLoggedIn(true);
            const email = sessionStorage.getItem('email');
            if (email) {
                const name = email.split('@')[0];
                setUserName(name);
            }
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.clear(); // Clear all session data on logout
        setIsLoggedIn(false);
        setUserName('');
        navigate('/');
        window.location.reload();
    };

    return (
        <nav>
            {/* ... other navbar code ... */}
            <div className="nav__logo">
                <Link to="/">StayHealthy</Link>
            </div>

            <ul className="nav__links">
                <li className="link"><Link to="/">Home</Link></li>
                <li className="link"><Link to="/booking-consultation">Appointments</Link></li>
                <li className="link"><Link to="/reviews">Reviews</Link></li>

                {!isLoggedIn ? (
                    <>
                        <li className="link"><Link to="/signup" className="btn1">Sign Up</Link></li>
                        <li className="link"><Link to="/login" className="btn1">Login</Link></li>
                    </>
                ) : (
                    <>
                        {/* Make the welcome message a dropdown trigger */}
                        <li className="link" onMouseLeave={() => setDropdownVisible(false)}>
                            <div 
                                className="welcome-user" 
                                onMouseEnter={() => setDropdownVisible(true)}
                            >
                                Welcome, {userName}
                            </div>
                            {/* Conditionally render the dropdown menu */}
                            {dropdownVisible && (
                                <div className="profile-dropdown">
                                    <Link to="/profile">Your Profile</Link>
                                    <Link to="/reports">Your Reports</Link>
                                </div>
                            )}
                        </li>
                        <li className="link">
                            <button onClick={handleLogout} className="btn1">Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;