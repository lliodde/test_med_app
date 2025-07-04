import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import './SignUp.css'; // Corrected CSS import path

// Component renamed to "SignUp" to follow PascalCase convention
const SignUp = () => {
    // State variables to hold the form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State for showing error messages
    const navigate = useNavigate();

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent page from reloading

        // Call the registration API
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, phone }),
        });

        const json = await response.json();

        if (json.authtoken) {
            // If registration is successful, store the auth token and user details
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Navigate to the home page and reload
            navigate("/");
            window.location.reload();
        } else {
            // Handle errors from the API
            if (json.errors) {
                const errorMsg = json.errors.map(error => error.msg).join(', ');
                setShowerr(errorMsg);
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <h1>Sign Up</h1>
                <p className="sub-text">
                    Already a member? <Link to="/login">Login</Link>
                </p>

                {/* The form now calls the 'register' function on submission */}
                <form onSubmit={register}>
                    {/* Name Input */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
                    </div>

                    {/* Phone Input */}
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" required />
                    </div>
                    
                    {/* Email Input */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" required />
                    </div>

                    {/* Password Input */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" placeholder="Enter your password" required />
                    </div>

                    {/* Display API errors here */}
                    {showerr && <div className="err-msg">{showerr}</div>}

                    <div className="btn-group">
                        <button type="submit" className="btn-submit">Submit</button>
                        <button type="reset" className="btn-reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Export the "SignUp" component
export default SignUp;