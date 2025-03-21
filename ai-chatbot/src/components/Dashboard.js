import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link ,useNavigate} from 'react-router-dom'
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

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Dashboard</h2>
                    <h1 className="text-center mb-4">Hello welcome to Dashboard page</h1>

                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <strong> Email:</strong> {currentUser.email}
                    <Link to="update-profile" className='btn btn-primary w-100 mt-5'>Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant='link' onClick={handleLogout}>Logout</Button>
            </div>
        </>
    )
}
