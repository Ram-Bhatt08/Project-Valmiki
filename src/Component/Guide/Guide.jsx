import React, { useState } from 'react';
import Footer from '../Footer/Footer'; // Import the Footer component
import Header from '../Header/Header'; // Import the Header component
import './Guide.css'; // Import the CSS file for the guide page

function Guide() {
    const [selectedOption, setSelectedOption] = useState(null);

    // Career options for different educational levels
    const careerOptions = {
        after10: [
            { id: 1, name: 'Science Stream', description: 'Focus on Physics, Chemistry, and Mathematics for engineering or medical fields.' },
            { id: 2, name: 'Commerce Stream', description: 'Focus on Accountancy, Business Studies, and Economics for careers in commerce.' },
            { id: 3, name: 'Arts Stream', description: 'Focus on History, Political Science, and Literature for careers in humanities.' },
        ],
        after12: [
            { id: 1, name: 'Engineering (B.Tech/B.E)', description: 'Pursue a career in technology and innovation.' },
            { id: 2, name: 'Medical (MBBS)', description: 'Become a doctor and serve in the healthcare industry.' },
            { id: 3, name: 'Commerce (B.Com)', description: 'Build a career in finance, accounting, or business.' },
            { id: 4, name: 'Arts (BA)', description: 'Explore careers in literature, history, or social sciences.' },
        ],
        afterBtech: [
            { id: 1, name: 'Web Development', description: 'Learn HTML, CSS, JavaScript, and frameworks like React or Angular.' },
            { id: 2, name: 'Software Development', description: 'Master programming languages like Java, Python, or C++.' },
            { id: 3, name: 'App Development', description: 'Learn mobile app development using Flutter, React Native, or Swift.' },
            { id: 4, name: 'UI/UX Design', description: 'Focus on design tools like Figma, Adobe XD, and user experience principles.' },
            { id: 5, name: 'Data Science', description: 'Learn Python, R, and data analysis tools like Pandas and TensorFlow.' },
        ],
        afterBcom: [
            { id: 1, name: 'Chartered Accountancy (CA)', description: 'Become a certified accountant and work in finance.' },
            { id: 2, name: 'MBA', description: 'Pursue a Master of Business Administration for leadership roles.' },
            { id: 3, name: 'Company Secretary (CS)', description: 'Specialize in corporate laws and governance.' },
        ],
        afterBca: [
            { id: 1, name: 'Software Developer', description: 'Learn programming languages like Java, Python, or C#.' },
            { id: 2, name: 'Web Developer', description: 'Master front-end and back-end development technologies.' },
            { id: 3, name: 'Database Administrator', description: 'Learn SQL and database management systems like MySQL or MongoDB.' },
        ],
        afterBit: [
            { id: 1, name: 'IT Consultant', description: 'Provide IT solutions and advice to businesses.' },
            { id: 2, name: 'Network Engineer', description: 'Design and manage computer networks.' },
            { id: 3, name: 'Cybersecurity Specialist', description: 'Protect systems and networks from cyber threats.' },
        ],
    };

    // Handle option selection
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="guide-page">
            {/* Include the Header component */}
            <Header />

            <div className="guide-content">
                <h1>Career Guide for Students</h1>
                <p>Choose your educational level to explore career options:</p>

                {/* Educational Level Buttons */}
                <div className="education-levels">
                    {Object.keys(careerOptions).map((option) => (
                        <button
                            key={option}
                            onClick={() => handleOptionSelect(option)}
                            className={selectedOption === option ? 'active' : ''}
                        >
                            {option.replace('after', 'After ').toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Display Career Options */}
                {selectedOption && (
                    <div className="career-options">
                        <h2>Career Options {selectedOption.replace('after', 'After ').toUpperCase()}</h2>
                        <div className="options-grid">
                            {careerOptions[selectedOption].map((option) => (
                                <div key={option.id} className="option-card">
                                    <h3>{option.name}</h3>
                                    <p>{option.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Include the Footer component */}
            <Footer />
        </div>
    );
}

export default Guide;