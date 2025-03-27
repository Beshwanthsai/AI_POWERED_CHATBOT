import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'


export default function Landing() {
    return (
        <div style={{ maxWidth:'100%'}}>

            <nav className='nav m-4' style={{ maxWidth:"100%", backgroundColor: "yellowgreen", borderRadius: "10px", textAlign: "center", padding: "10px", flex: "1" }}>
                <a href='/' className='chat-bot-title m-3 ' > Chat Bot </a>
                <ul className='m-3' style={{ display: "flex", justifyContent: "center", gap: "100px" }}>
                    <li>
                        <a href="/login">Log In</a>
                    </li>
                    <li>
                        <a href="/signup">Sign Up</a>
                    </li>
                </ul>
            </nav>
            <div style={{ backgroundColor: "lightblue", borderRadius: "10px", padding: "90px" }}>
                <center>
                    <div className='mb-5' style={{ backgroundColor: "yellowgreen", borderRadius: "15px" }}>Landing Page</div>
                </center>
                <Card style={{ backgroundColor: "lightblue", padding: "20px", width: "100" }} className='mb-5 w-100 text-center '  >
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
            </div>
        </div>

    )
}
