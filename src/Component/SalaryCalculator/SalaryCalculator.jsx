import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './SalaryCalculator.css'; // Import the CSS file

function SalaryCalculator() {
    const [educationLevel, setEducationLevel] = useState("B.Tech");
    const [experience, setExperience] = useState(0);
    const [location, setLocation] = useState("USA");
    const [estimatedSalary, setEstimatedSalary] = useState(null);
    const navigate = useNavigate(); // Initialize the navigate function

    // Salary data based on education, experience, and location
    const salaryData = {
        "B.Tech": {
            USA: { entryLevel: "$70,000", midLevel: "$100,000", seniorLevel: "$150,000" },
            India: { entryLevel: "₹6,00,000", midLevel: "₹12,00,000", seniorLevel: "₹20,00,000" },
        },
        "MBBS": {
            USA: { entryLevel: "$80,000", midLevel: "$120,000", seniorLevel: "$200,000" },
            India: { entryLevel: "₹8,00,000", midLevel: "₹15,00,000", seniorLevel: "₹25,00,000" },
        },
        "MBA": {
            USA: { entryLevel: "$90,000", midLevel: "$130,000", seniorLevel: "$180,000" },
            India: { entryLevel: "₹10,00,000", midLevel: "₹18,00,000", seniorLevel: "₹30,00,000" },
        },
    };

    // Calculate estimated salary
    const calculateSalary = () => {
        // Convert experience to a number
        const experienceYears = parseInt(experience, 10);

        // Validate experience input
        if (isNaN(experienceYears)) {
            alert("Please enter a valid number for years of experience.");
            return;
        }

        // Determine the experience level
        let level;
        if (experienceYears < 0) {
            alert("Experience cannot be negative. Please enter a valid number.");
            return;
        } else if (experienceYears < 3) {
            level = "entryLevel";
        } else if (experienceYears < 7) {
            level = "midLevel";
        } else {
            level = "seniorLevel";
        }

        // Check if the selected education level and location exist in the salary data
        if (!salaryData[educationLevel] || !salaryData[educationLevel][location]) {
            alert("Invalid education level or location selected.");
            return;
        }

        // Set the estimated salary
        setEstimatedSalary(salaryData[educationLevel][location][level]);
    };

    return (
        <div className="salary-calculator-page">
            <div className="salary-calculator-content">
                <h1>Interactive Salary Calculator</h1>
                <p>Estimate your potential salary based on your education, experience, and location:</p>

                {/* Input Fields */}
                <div className="input-fields">
                    <label>
                        Education Level:
                        <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}>
                            <option value="B.Tech">B.Tech</option>
                            <option value="MBBS">MBBS</option>
                            <option value="MBA">MBA</option>
                        </select>
                    </label>
                    <label>
                        Years of Experience:
                        <input
                            type="number"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            min="0"
                        />
                    </label>
                    <label>
                        Location:
                        <select value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="USA">USA</option>
                            <option value="India">India</option>
                        </select>
                    </label>
                </div>

                {/* Calculate Button */}
                <button onClick={calculateSalary}>Calculate Salary</button>

                {/* Display Estimated Salary */}
                {estimatedSalary && (
                    <div className="salary-result">
                        <h3>Your Estimated Salary:</h3>
                        <p>{estimatedSalary}</p>
                    </div>
                )}

                {/* Back to Career Tools button */}
                <button onClick={() => navigate('/career')}>Back to Career Tools</button>
            </div>
        </div>
    );
}

export default SalaryCalculator;
