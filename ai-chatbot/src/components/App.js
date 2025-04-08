import React from 'react';
import SignUp from './SignUp';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Landing from './Landing';
import Privacypolicy from './Privacypolicy';
import TermsService from './TermsService';
import ContactUs from './ContactUs';


function App() {
    return (
        
        <div className='justify-content-center d-flex'
            style={{ minHeight: '100vh',width:'100vw' }}>
            {/* <Navbar /> */}
            <div className='w-100' style={{ minWidth: '300px' }}>
            
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/Dashboard" element={
                                <div className='d-flex justify-content-center mt-5'>
                                    <div style={{maxWidth:'100%', width:'100%', marginLeft:"auto"}}>
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
                            <Route path="/privacypolicy" element={<div className='d-flex justify-content-center'>
                                    <div style={{maxWidth:'80%', width:'100%'}}>
                                        <Privacypolicy />
                                    </div>
                                </div>} />
                            <Route path="/TermsService" element={<div className='d-flex justify-content-center'>
                                    <div style={{maxWidth:'100%', width:'100%'}}>
                                        <TermsService  className='mb-5'/>
                                    </div>
                                </div>} />
                            <Route path="/ContactUs" element={<div className='d-flex justify-content-center'>
                                    <div style={{maxWidth:'80%', width:'100%'}}>
                                        <ContactUs />
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
