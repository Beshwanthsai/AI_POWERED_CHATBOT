import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { GoogleGenerativeAI } from "@google/generative-ai"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Dashboard.css'


const apiKey = process.env.REACT_APP_GEMINI_API_KEY
console.log("API Key loaded:", apiKey ? `${apiKey.substring(0, 5)}...` : "undefined")


const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY, {
  apiVersion: "v1"  
});
export default function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    const [messages, setMessages] = useState([])
    const [inputText, setInputText] = useState('')

    async function handleLogout() {
        setError('')
        try {
            await signOut(auth)
            navigate('/login')
        } catch (error) {
            console.error("Logout failed:", error)
            setError("Failed to log out")
        }
    }

    const sendMessage = async () => {
        if (!inputText.trim()) return;
    
        const userMessage = { text: inputText, sender: "user" }
        setMessages((prev) => [...prev, userMessage])
        setInputText("")
    
        try {
            if (!process.env.REACT_APP_GEMINI_API_KEY) {
                throw new Error("API key is missing. Please check your .env.local file.");
            }
            
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });  
            

            const result = await model.generateContent(inputText);
            
            const response = await result.response;
            const botText = response.text();
            
            const botMessage = { text: botText, sender: "bot" }
            setMessages((prev) => [...prev, botMessage])
        } catch (err) {
            console.error("Gemini API Error:", err);
            setMessages((prev) => [
                ...prev, 
                { 
                    text: `Error: ${err.message || "Something went wrong connecting to the AI service."}`, 
                    sender: "bot" 
                }
            ]);
        }}
    return (
        <div className="dashboard-container">
            <div className="profile-section">
                <h2 className="dashboard-title">Dashboard</h2>
                <h3 className="welcome-text">Welcome to Dashboard</h3>

                <h4 className="profile-header">Profile</h4>
                {error && <Alert variant="danger">{error}</Alert>}

                <div className="profile-info">
                    <strong>Email:</strong> {currentUser?.email}
                </div>

                <div className="profile-actions">
                    <Link to="/update-profile" className="update-profile-btn">
                        Update Profile
                    </Link>
                </div>

                <div className="logout-container">
                    <Button 
                        variant="danger"
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>
            </div>

            <div className="chat-section">
                <h2 className="chat-title">Chat with me here 🌟</h2>

                <div className="messages-container">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}-message`}>
                            <strong className="sender-name">{msg.sender === "user" ? "You" : "tanjirokomado"}:</strong>
                            <span className="message-text">{msg.text}</span>
                        </div>
                    ))}
                </div>

                <div className="input-container">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Type your message here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <Button className="send-button" onClick={sendMessage}>Send</Button>
                </div>
            </div>
        </div>
    )
}


