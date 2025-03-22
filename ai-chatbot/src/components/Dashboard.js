import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Dashboard</h2>
                    <h1>Hello welcome to Dashboard page</h1>
                    
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to={"/login"}>Log In</Link>
            </div>
        </>
    )
}
