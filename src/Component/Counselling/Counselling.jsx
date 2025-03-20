import React from 'react';
import Footer from '../Footer/Footer'; // Import the Footer component
import Header from '../Header/Header'; // Import the Header component
import './Counselling.css'; // Import the CSS file for the counselling page

function Counselling() {
    return (
        <div className="counselling-page">
            {/* Include the Header component */}
            <Header />

            <div className="counselling-content">
                {/* Counselling Hero Section */}
                <div className="counselling-hero">
                    <h1>Professional Counselling Services</h1>
                    <p>Get expert advice and support for your personal, career, or mental health concerns.</p>
                </div>

                {/* Counselling Services Section */}
                <div className="counselling-services">
                    <h2>Our Counselling Services</h2>
                    <div className="services-list">
                        <div className="service-card">
                            <h3>Personal Counselling</h3>
                            <p>Address personal issues, relationships, and emotional well-being.</p>
                        </div>
                        <div className="service-card">
                            <h3>Career Counselling</h3>
                            <p>Guidance for career choices, job transitions, and professional growth.</p>
                        </div>
                        <div className="service-card">
                            <h3>Mental Health Support</h3>
                            <p>Support for anxiety, depression, stress, and other mental health concerns.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Include the Footer component */}
            <Footer />
        </div>
    );
}

export default Counselling;