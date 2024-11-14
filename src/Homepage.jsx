// src/Homepage.jsx
import React from 'react';

const Homepage = () => {
    return (
        <div className="homepage">
            <section className="hero">
                <h1>Find and Pay for Parking Easily</h1>
                <p>Download our app to start parking smarter today!</p>
                <button className="cta-button">Get the App</button>
            </section>

            <section className="features">
                <h2>Why Choose Our Parking App?</h2>
                <div className="feature-grid">
                    <div className="feature-item">
                        <h3>Easy to Use</h3>
                        <p>Find and pay for parking in seconds</p>
                    </div>
                    <div className="feature-item">
                        <h3>Save Time</h3>
                        <p>No more searching for parking spots</p>
                    </div>
                    <div className="feature-item">
                        <h3>Secure Payments</h3>
                        <p>Safe and encrypted transactions</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>1. Download the App</h3>
                        <p>Get our app from your app store</p>
                    </div>
                    <div className="step">
                        <h3>2. Find Parking</h3>
                        <p>Locate available spots near you</p>
                    </div>
                    <div className="step">
                        <h3>3. Pay & Park</h3>
                        <p>Pay securely through the app</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;