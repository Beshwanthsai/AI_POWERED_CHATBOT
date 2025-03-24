import React from 'react';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Landing from './Landing';
import { Navbar } from './Landing';

function App() {
    return (
        
        <Container className='d-flex align-items-center justify-content-center mt-5 '
            style={{ minHeight: '100vh' }}>
            <Navbar />
            <div className='w-100' style={{ maxWidth: '400px' }}>
            
                <Router>
                    <AuthProvider>
                        <Routes>
                            
                            <Route path="/" element={<Landing />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    )
}

export default App;
