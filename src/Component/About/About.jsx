import React from 'react';
import Footer from '../Footer/Footer'; // Import the Footer component
import Header from '../Header/Header'; // Import the Header component
import './About.css'; // Import the CSS file for the about page
import missionImage from './mission-image.jpg'; // Import mission image
import visionImage from './vision-image.jpg'; // Import vision image

function About() {
    return (
        <div className="about-page">
            {/* Include the Header component */}
            <Header />

            <div className="about-content">
                {/* Who We Are Section */}
                <section className="who-we-are">
                    <h1>Who We Are</h1>
                    <p className="subtitle">A journey of passion and dedication</p>
                    <p className="description">
                    We are a team of career counselors, industry experts, and education
                    specialists dedicated to guiding students, job seekers, and professionals
                    toward fulfilling careers. Whether you're unsure about your next step or 
                    looking to advance in your field, we provide personalized career counseling,
                    expert advice, and practical resources to help you succeed.
                        </p>
                </section>

                {/* Our Mission Section */}
                <section className="our-mission">
                    <div className="content">
                        <div className="text">
                            <h2>Our Mission</h2>
                            <p>
                            Our mission is to empower individuals facing career uncertainty by providing 
                            clear guidance and resources that foster informed decision-making. Through
                            personalized support and comprehensive information, we aim to enable each 
                            person to identify their passions, strengths, and professional aspirations. </p>
                        </div>
                        <div className="image">
                            <img src={missionImage} alt="Our Mission" />
                        </div>
                    </div>
                </section>

                {/* Our Vision Section */}
                <section className="our-vision">
                    <div className="content">
                        <div className="image">
                            <img src={visionImage} alt="Our Vision" />
                        </div>
                        <div className="text">
                            <h2>Our Vision</h2>
                            <p>
                            To create a world where every individual has the clarity, confidence,
                            and resources to choose a career that aligns with their passions and
                            potential. We envision a future where career decisions are driven by
                            informed choices rather than 
                            uncertainty, ensuring personal fulfillment and professional success.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Include the Footer component */}
            <Footer />
        </div>
    );
}

export default About;