import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from '../Header/Header'; // Import the Header component
import HeroImage from './Hero-image.jpg'; // Import the image
import './Home.css'; // Import the CSS file for the home page

function Home() {
    return (
        <div className="home">
            {/* Include the Header component */}
            <Header />

            {/* Hero Section */}
            <div className="hero-section">
    <div className='left'>
        <h1>Welcome to Project Valmiki.</h1>
        <p>We are building a digital solution—a website that helps students choose 
        their careers wisely and provides counseling, much like how Rishi Valmiki 
        transformed his
             path with guidance, showing that the right direction can change lives.</p>
        <button onClick={() => alert('Explore more!')}>Explore More</button>
    </div>
    <div className='right'>
        <img src={HeroImage} alt="Hero" className="hero-image" /> {/* Use imported image */}
    </div>
</div>

            {/* Content Sections */}
            <div className="content-section">
                <h2>Our Services</h2>
                <div className="services">
                    <div className="service-card">
                        <h3>Counselling</h3>
                        <p>Professional counselling services to help you navigate life's challenges.</p>
                        <Link to="/counselling" className="service-link">Learn More</Link>
                    </div>
                    <div className="service-card">
                        <h3>Guide</h3>
                        <p>Comprehensive guides to assist you in making informed decisions.</p>
                        <Link to="/guide" className="service-link">Learn More</Link>
                    </div>
                    <div className="service-card">
                        <h3>Support</h3>
                        <p>24/7 support to ensure you're never alone in your journey.</p>
                        <Link to="/contact" className="service-link">Learn More</Link>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials">
                    <div className="testimonial-card">
                        <p>"This platform changed my life! Highly recommended."</p>
                        <p>- Laxman Bhatt.</p>
                    </div>
                    <div className="testimonial-card">
                        <p>"The counselling services are top-notch. Thank you!"</p>
                        <p>- Radha Kumari.</p>
                    </div>
                    <div className="testimonial-card">
                        <p>"Great guides and support. Very helpful!"</p>
                        <p>- Tanuj Kusmi.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>&copy; 2025 Project Valmiki. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Home;