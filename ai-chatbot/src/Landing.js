import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default function Landing() {
    return (
        <>
            <center>
                <div className='mb-5' style={{ backgroundColor: "yellowgreen", borderRadius: "15px" }}>Landing Page</div>
            </center>
            <Card style={{ backgroundColor: "lightblue" }} className='mb-5'>
                Hi Hello Welcome to Landing Page

            </Card>
            <div className="w-100 text-center mt-2">
                Get Started <Link to={"/login"}>Log In</Link>
            </div>
                <br /><br />
            <p>HI Hello guys if you are not having an account? SignUp to ChatBot</p>
            <div className='mt-10'>
                <div className="w-100 text-center mt-6">
                    Need an account? <Link to={"/signup"}>SignUp</Link>
                </div>
            </div>

        </>
    )
}
