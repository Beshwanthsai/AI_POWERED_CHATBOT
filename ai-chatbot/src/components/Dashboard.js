import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {

    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            navigate('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    const [inputText, setInputText] = useState('');

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginRight:"30px" }}>
            <Card style={{ color: "Highlight", borderRadius: "1000px", overflow: "hidden", width: "100%", maxWidth: "500px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Dashboard</h2>
                    <h1 className="text-center mb-4">Hello welcome to Dashboard page</h1>

                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <strong>Email:</strong> {currentUser.email}
                    <Link to="update-profile" className='btn btn-primary w-100 mt-5' style={{ borderRadius: "200px", border: "4px solid darkblue", width: "50px", display: "inline-block", padding: "10px 15px" }}>
                        <strong>Update Profile</strong>
                    </Link>
                    <br />
                    <br />
                    <center>
                        <div className="w-50 text-center mt-2">
                            <Button variant='link' style={{ borderRadius: "200px", border: "4px solid black" }} onClick={handleLogout}>Logout</Button>
                        </div>
                    </center>
                </Card.Body>
            </Card>

            <Card style={{ color: "Highlight", borderRadius: "20px", overflow: "hidden", width: "100%", maxWidth: "500px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Chat with me here🌟</h2>
                    <div className="text-center mb-4">
                        <strong>Entered Text:</strong> {inputText}
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter text here"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}
