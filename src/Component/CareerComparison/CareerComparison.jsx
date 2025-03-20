import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './CareerComparison.css'; // Import the CSS file

function CareerComparison() {
    const [career1, setCareer1] = useState("SoftwareEngineer");
    const [career2, setCareer2] = useState("Doctor");
    const navigate = useNavigate(); // Initialize the navigate function

    // Career data for comparison
    const careerData = {
        SoftwareEngineer: {
            salary: "$100,000",
            growth: "High",
            skills: ["Coding", "Problem Solving", "Teamwork"],
        },
        Doctor: {
            salary: "$150,000",
            growth: "Medium",
            skills: ["Medical Knowledge", "Communication", "Empathy"],
        },
        DataScientist: {
            salary: "$120,000",
            growth: "High",
            skills: ["Data Analysis", "Machine Learning", "Python"],
        },
        GraphicDesigner: {
            salary: "$70,000",
            growth: "Medium",
            skills: ["Design Tools", "Creativity", "Communication"],
        },
    };

    return (
        <div className="career-comparison-page">
            <div className="career-comparison-content">
                <h1>Career Comparison Tool</h1>
                <p>Compare two careers based on salary, growth, and required skills:</p>

                {/* Dropdowns for career selection */}
                <div className="career-selectors">
                    <select value={career1} onChange={(e) => setCareer1(e.target.value)}>
                        <option value="SoftwareEngineer">Software Engineer</option>
                        <option value="Doctor">Doctor</option>
                        <option value="DataScientist">Data Scientist</option>
                        <option value="GraphicDesigner">Graphic Designer</option>
                    </select>
                    <select value={career2} onChange={(e) => setCareer2(e.target.value)}>
                        <option value="SoftwareEngineer">Software Engineer</option>
                        <option value="Doctor">Doctor</option>
                        <option value="DataScientist">Data Scientist</option>
                        <option value="GraphicDesigner">Graphic Designer</option>
                    </select>
                </div>

                {/* Comparison Table */}
                <div className="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Criteria</th>
                                <th>{career1.replace(/([A-Z])/g, ' $1').trim()}</th>
                                <th>{career2.replace(/([A-Z])/g, ' $1').trim()}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Salary</td>
                                <td>{careerData[career1].salary}</td>
                                <td>{careerData[career2].salary}</td>
                            </tr>
                            <tr>
                                <td>Growth</td>
                                <td>{careerData[career1].growth}</td>
                                <td>{careerData[career2].growth}</td>
                            </tr>
                            <tr>
                                <td>Skills</td>
                                <td>
                                    <ul>
                                        {careerData[career1].skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {careerData[career2].skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Back to Career Tools button */}
                <button onClick={() => navigate('/career')}>Back to Career Tools</button>
            </div>
        </div>
    );
}

export default CareerComparison;