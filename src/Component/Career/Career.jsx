import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import Footer from '../Footer/Footer'; // Import the Footer component
import Header from '../Header/Header'; // Import the Header component
import './Career.css'; // Import the CSS file for the Career page

function Career() {
    return (
        <div className="career-page">
            {/* Include the Header component */}
            <Header />

            <div className="career-content">
                <h1>Career Tools</h1>
                <p>Explore our tools to help you make informed career decisions:</p>

                {/* Tools Grid */}
                <div className="tools-grid">
                    {/* Career Quiz */}
                    <Link to="/Career-quiz" className="tool-card">
                        <h2>Career Quiz</h2>
                        <p>Take a quiz to discover the best career options for you.</p>
                    </Link>

                    {/* Skill Assessment Tool */}
                    <Link to="/skill-assessment" className="tool-card">
                        <h2>Skill Assessment</h2>
                        <p>Assess your skills and find careers that match your strengths.</p>
                    </Link>

                    {/* Career Pathway Visualizer */}
                    <Link to="/career-pathway" className="tool-card">
                        <h2>Career Pathway Visualizer</h2>
                        <p>Visualize the steps to achieve your dream career.</p>
                    </Link>

                    {/* Career Comparison Tool */}
                    <Link to="/career-comparison" className="tool-card">
                        <h2>Career Comparison</h2>
                        <p>Compare different careers based on salary, growth, and skills.</p>
                    </Link>

                    {/* Interactive Salary Calculator */}
                    <Link to="/salary-calculator" className="tool-card">
                        <h2>Salary Calculator</h2>
                        <p>Estimate your potential salary based on your education and experience.</p>
                    </Link>
                    <Link to="/chatbot" className="tool-card">
    <h2>Virtual Career Mentor</h2>
    <p>Ask questions about careers, education, and job opportunities.</p>
</Link>
<Link to="/videoguide" className="tool-card">
    <h2>Video Guide</h2>
    <p>Explore tutorials, tips, and step-by-step guides through video content.</p>
</Link>
<Link to="/careertrends" className="tool-card">
            <h2>Career Trends and Insights</h2>
            <p>Explore real-time data on trending careers, job market demands, and future opportunities.</p>
        </Link>
                </div>
            </div>

            {/* Include the Footer component */}
            <Footer />
        </div>
    );
}

export default Career;