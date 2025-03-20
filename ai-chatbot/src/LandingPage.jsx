import React, { useState } from 'react';
import './styles/Landing.css';
import chatbotImage from './assets/Beshwanth.jpg';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const GoToAuth = () => {
        navigate("/login");
    }
    


    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">AI CHAT BOT</div>
                <div className={`nav_links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <button className="login-btn" onClick={GoToAuth}>Login</button>
                </div>
            </nav>

            <main className="herosection">
                <div className="herocontent">
                    <h1>Hello Welcome to my AI-Powered ChatBot</h1>
                    <p>Providing a seamless and amazing AI integrated platform</p>
                    <br /><br />
                    <button className="cta-button" onClick={GoToAuth}>Get Started</button>
                </div>
                <div className="hero-image">
                    <img src={chatbotImage} alt="BeshwanthChatbotimg1" />
                </div>
            </main>

            <section id="features" className="features-section">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Natural Language Processing</h3>
                        <p>Understanding and responding to human language naturally</p>
                    </div>
                    <div className="feature-card">
                        <h3>24/7 Availability</h3>
                        <p>Round-the-clock customer support assistance</p>
                    </div>
                    <div className="feature-card">
                        <h3>Learning Capabilities</h3>
                        <p>Continuously improving responses through machine learning</p>
                    </div>
                    <div className="feature-card">
                        <h3>Multi-query Handling</h3>
                        <p>Efficiently manage multiple customer inquiries simultaneously</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;