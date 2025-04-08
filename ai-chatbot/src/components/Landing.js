import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Landing.css' 
// import Privacypolicy from './Privacypolicy'
// import TermsService from './TermsService'
// import ContactUs from './ContactUs'


export default function Landing() {
    return (
        <div className="landing-container">
            <nav className="modern-nav">
                <Link to="/" className="brand">Chat Bot 🤖</Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/login">Log In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
         
            
            <div className="hero">
                <h1 className="hero-title">Welcome to AI ChatBot</h1>
                <div className="hero-content">
                    Experience the power of AI-driven conversations that help you get things done faster.
                </div>
                
                <div className="cta-container">
                    <Link to="/login" className="cta-btn primary-btn">
                        Get Started
                    </Link>
                    <Link to="/signup" className="cta-btn secondary-btn">
                        Create Account
                    </Link>
                </div>
                
                
            </div>

            <div className='hero mt-5'>
                <h2 className="hero-title">Why Choose Us?</h2>
                <div className="hero-content">
                    Our AI ChatBot is designed to assist you with a variety of tasks, from answering questions to providing recommendations. 
                    Join us today and experience the future of communication.
                    <div>
                    <p className="helper-text">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
                
                <p className="helper-text">
                    New to our platform? <Link to="/signup">Sign Up</Link>
                </p>
                    </div>
                </div>
            </div>
            <footer className="landing-footer">
                <p>&copy; {new Date().getFullYear()} AI ChatBot. All rights reserved.</p>
                <ul className="footer-links">
                    <li>
                        <Link to="/Privacypolicy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/TermsService">Terms of Service</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                </ul>
            </footer>
        </div>
    )
}