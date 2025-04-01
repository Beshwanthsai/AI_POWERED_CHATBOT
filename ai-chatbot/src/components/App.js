import React from 'react';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Landing from './Landing';
// import { Navbar } from './Landing';

function App() {
    return (
        
        <div className='justify-content-center d-flex'
            style={{ minHeight: '100vh' }}>
            {/* <Navbar /> */}
            <div className='w-100' style={{ minWidth: '300px' }}>
            
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/Dashboard" element={
                                <div className='d-flex justify-content-center'>
                                    <div style={{maxWidth:'100px', width:'100%'}}>
                                        <Dashboard />
                                    </div>
                                </div>
                            } />
                            <Route path="/signup" element={<div className='d-flex justify-content-center'>
                                    <div style={{maxWidth:'400px', width:'100%'}}>
                                        <SignUp />
                                    </div>
                                </div>} />
                            <Route path="/login" element={<div className='d-flex justify-content-center'>
                                    <div style={{maxWidth:'400px', width:'100%'}}>
                                        <Login />
                                    </div>
                                </div>} />
                        </Routes>
                    </AuthProvider>
                </Router>
            </div>
        </div>
    )
}

export default App;
