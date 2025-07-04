import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import './Login.css'; // Make sure you have this CSS file

const Login = () => {
    // State variables to hold the form data
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // If a user is already logged in, redirect them to the home page
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/");
        }
    }, [navigate]);

    // Function to handle the login form submission
    const login = async (e) => {
        e.preventDefault();
        
        // Call the login API endpoint
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const json = await res.json();
        
        if (json.authtoken) {
            // If login is successful, store the auth token and email
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);

            // Redirect to home page and reload
            navigate('/');
            window.location.reload();
        } else {
            // Show an alert if there are errors
            if (json.errors) {
                const errorMsg = json.errors.map(error => error.msg).join(', ');
                alert(errorMsg);
            } else {
                alert(json.error);
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h1>Login</h1>
                <p className="sub-text">
                    Are you a new member? <Link to="/signup">Sign Up Here</Link>
                </p>
                <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    {/* COMPLETED: Added the password input field */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn-submit">Login</button>
                        <button type="reset" className="btn-reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;