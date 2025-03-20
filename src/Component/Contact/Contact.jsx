import React from 'react';
import Footer from '../Footer/Footer'; // Import the Footer component
import Header from '../Header/Header'; // Import the Header component
import './Contact.css'; // Import the CSS file for the contact page

function Contact() {
    const whatsappNumber = "+918630337415";
    const gmailAddress = "the.ram.bhatt@gmail.com";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber}`;
        window.open(url, '_blank');
    };

    const handleEmailClick = () => {
        const url = `mailto:${gmailAddress}`;
        window.open(url, '_blank');
    };

    return (
        <div className="contact-page">
            {/* Include the Header component */}
            <Header />

            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us via WhatsApp or email.</p>

                {/* Contact Options */}
                <div className="contact-options">
                    <div className="contact-card" onClick={handleWhatsAppClick}>
                        <h2>WhatsApp</h2>
                        <p>Chat with us on WhatsApp</p>
                        <p>{whatsappNumber}</p>
                    </div>

                    <div className="contact-card" onClick={handleEmailClick}>
                        <h2>Email</h2>
                        <p>Send us an email</p>
                        <p>{gmailAddress}</p>
                    </div>
                </div>

                {/* Additional Links (Placeholder) */}
                <div className="additional-links">
                    <h2>Additional Links</h2>
                    <p>More ways to connect with us will be added soon.</p>
                </div>
            </div>

            {/* Include the Footer component */}
            <Footer />
        </div>
    );
}

export default Contact;