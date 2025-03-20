import React from 'react';
import './CareerTrends.css'; // Ensure the CSS file is correctly imported

const CareerTrends = () => {
    // Static data for career trends
    const careerTrends = [
        { career: "Data Scientist", demand: "High", growth: "20% by 2030" },
        { career: "AI Engineer", demand: "Very High", growth: "25% by 2030" },
        { career: "Software Developer", demand: "High", growth: "22% by 2030" },
        { career: "Cybersecurity Analyst", demand: "Very High", growth: "30% by 2030" },
        { career: "Cloud Engineer", demand: "High", growth: "28% by 2030" },
    ];

    return (
        <div className="career-trends">
            <h2>Career Trends and Insights</h2>
            <p>Explore real-time data on trending careers, job market demands, and future opportunities.</p>
            
            <table className="trends-table">
                <thead>
                    <tr>
                        <th>Career</th>
                        <th>Demand</th>
                        <th>Growth</th>
                    </tr>
                </thead>
                <tbody>
                    {careerTrends.map((trend, index) => (
                        <tr key={index}>
                            <td>{trend.career}</td>
                            <td>{trend.demand}</td>
                            <td>{trend.growth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CareerTrends;