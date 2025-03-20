import React, { useState } from 'react';
import './CareerPathway.css'; // Import the CSS file

function CareerPathway() {
    const [selectedLevel, setSelectedLevel] = useState("after10");

    // Career pathways for different educational levels
    const careerPathways = {
        after10: {
            Science: ["12th Science", "JEE/NEET Preparation", "B.Tech/MBBS", "Specialization"],
            Commerce: ["12th Commerce", "CA Foundation", "CA Intermediate", "CA Final"],
            Arts: ["12th Arts", "BA in Humanities", "MA in Humanities", "Specialization"],
        },
        after12: {
            Engineering: ["B.Tech", "Internships", "Job Placement", "Higher Studies"],
            Medical: ["MBBS", "Internship", "Specialization", "Practice"],
            Commerce: ["B.Com", "MBA", "Job Placement", "Certifications"],
            Arts: ["BA", "MA", "PhD", "Teaching/Research"],
        },
        afterBtech: {
            "Web Development": ["Learn HTML/CSS/JS", "Learn Frameworks (React, Angular)", "Build Projects", "Job Placement"],
            "Data Science": ["Learn Python/R", "Learn Data Analysis Tools", "Build ML Models", "Job Placement"],
            "Software Development": ["Learn Java/Python/C++", "Learn Algorithms", "Build Projects", "Job Placement"],
        },
    };

    return (
        <div className="career-pathway-page">
            <div className="career-pathway-content">
                <h1>Career Pathway Visualizer</h1>
                <p>Select your current educational level to visualize your career pathway:</p>

                {/* Dropdown for educational level */}
                <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                >
                    <option value="after10">After 10th</option>
                    <option value="after12">After 12th</option>
                    <option value="afterBtech">After B.Tech</option>
                </select>

                {/* Display career pathways */}
                <div className="pathway-list">
                    {Object.entries(careerPathways[selectedLevel]).map(([path, steps]) => (
                        <div key={path} className="pathway-card">
                            <h3>{path}</h3>
                            <ul>
                                {steps.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Back to Career Tools button */}
                <button onClick={() => navigate('/career')}>Back to Career Tools</button>
            </div>
        </div>
    );
}

export default CareerPathway;