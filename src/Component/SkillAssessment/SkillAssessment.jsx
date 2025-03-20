import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './SkillAssessment.css'; // Import the CSS file

function SkillAssessment() {
    const [skills, setSkills] = useState([
        { name: "Coding", level: 0 },
        { name: "Design", level: 0 },
        { name: "Communication", level: 0 },
        { name: "Problem Solving", level: 0 },
        { name: "Data Analysis", level: 0 },
    ]);
    const [assessmentResult, setAssessmentResult] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    // Handle skill level change
    const handleSkillChange = (index, level) => {
        const updatedSkills = [...skills];
        updatedSkills[index].level = parseInt(level, 10);
        setSkills(updatedSkills);
    };

    // Calculate assessment result
    const calculateResult = () => {
        const totalScore = skills.reduce((sum, skill) => sum + skill.level, 0);
        const averageScore = totalScore / skills.length;

        let result;
        if (averageScore >= 4) {
            result = "You have advanced skills! Consider roles in leadership or specialized fields.";
        } else if (averageScore >= 2.5) {
            result = "You have intermediate skills! Explore roles that allow you to grow and specialize.";
        } else {
            result = "You have beginner skills! Focus on building foundational skills and gaining experience.";
        }

        setAssessmentResult(result);
    };

    // Reset assessment
    const resetAssessment = () => {
        setSkills(skills.map(skill => ({ ...skill, level: 0 })));
        setAssessmentResult(null);
    };

    return (
        <div className="skill-assessment-page">
            <div className="skill-assessment-content">
                <h1>Skill Assessment</h1>
                {assessmentResult ? (
                    <div className="assessment-result">
                        <h3>Your Skill Assessment Result:</h3>
                        <p>{assessmentResult}</p>
                        <button onClick={resetAssessment}>Retake Assessment</button>
                        <button onClick={() => navigate('/career')}>Back to Career Tools</button>
                    </div>
                ) : (
                    <div className="skill-list">
                        <h3>Rate your skills on a scale of 1 to 5:</h3>
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <h4>{skill.name}</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="5"
                                    value={skill.level}
                                    onChange={(e) => handleSkillChange(index, e.target.value)}
                                />
                                <span>{skill.level}</span>
                            </div>
                        ))}
                        <button onClick={calculateResult}>Submit Assessment</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SkillAssessment;