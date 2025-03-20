import React, { useState } from 'react';
import './login.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleBack =()=>
    {
        navigate("/");
    }
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            // Add your authentication logic here
            console.log('Login attempt with:', credentials);
            
            // Simulate API call
            if (!credentials.username || !credentials.password) {
                throw new Error('Please fill in all fields');
            }
            
            // If login successful, redirect or update state
            
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
        <nav className="navbar">
                <div className="logo">AI CHAT BOT</div>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
            </nav>
            
        <div className="login-container">
            <h2>Welcome Back</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Log In</button>
                <button type='button' onClick={handleBack}>⚡️Back to Landing</button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
        </>
    );
};

export default Login;
