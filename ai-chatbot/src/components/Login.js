import React, { useRef , useState} from "react"
import { Form, Button, Card ,Alert} from "react-bootstrap"
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import '../styles/Signup.css'




export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/Dashboard")
        } catch (err) {
            // Show the specific Firebase error message
            setError(err.message || "Failed to log in")
            console.error("Signup error:", err)
        }
    
        setLoading(false)
      }

    return (
        <>
        
            <Card className="mt-5">
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button className="w-100 mt-3" type="submit"  disabled={loading} >
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center ">
               Need an account? <Link to={"/signup"}>SignUp</Link>
            </div>
            <div className="w-100 text-center ">
               <Link to={"/"}>Home</Link>
            </div>
        </>
    )
}
