// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <header className="modern-header">
                    <nav className="modern-nav">
                        <div className="logo">YourLogo</div>
                        <div className="nav-links">
                            <Link to="/" className="nav-item">Home</Link>
                            <Link to="/how-it-works" className="nav-item">How It Works</Link>
                            <Link to="/features" className="nav-item">Features</Link>
                            <Link to="/contact" className="nav-item">Contact</Link>
                        </div>
                        <button className="login-button">Log In</button>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    {/* Add other routes here */}
                </Routes>

                <footer>
                    <p>&copy; 2024 Your Parking App. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;