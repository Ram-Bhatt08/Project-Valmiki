import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import React Router components
import About from './Component/About/About'; // Import the About component
import Career from './Component/Career/Career';
import CareerComparison from './Component/CareerComparison/CareerComparison';
import CareerPathway from './Component/CareerPathway/CareerPathway';
import CareerQuiz from './Component/CareerQuiz/CareerQuiz';
import CareerTrends from './Component/CareerTrends/CareerTrends';
import Chatbot from './Component/Chatbot/Chatbot';
import Contact from './Component/Contact/Contact'; // Import the Contact component
import Counselling from './Component/Counselling/Counselling'; // Import the Counselling component
import Guide from './Component/Guide/Guide'; // Import the Guide component
import Home from './Component/Home/Home'; // Import the Home component
import SalaryCalculator from './Component/SalaryCalculator/SalaryCalculator';
import SkillAssessment from './Component/SkillAssessment/SkillAssessment';
import VideoGuides from './Component/VideoGuides/VideoGuides';

function App() {
    return (
        <Router>
            <Routes>
                {/* Home Page Route */}
                <Route path="/" element={<Home />} />

                {/* Other Routes */}
                <Route path="/counselling" element={<Counselling />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/career-quiz" element={<CareerQuiz />} />
                <Route path="/skill-assessment" element={<SkillAssessment />} />
                <Route path="/career-pathway" element={<CareerPathway />} />
                <Route path="/videoguide" element={<VideoGuides/>}/>
                <Route path="/careertrends" element={<CareerTrends/>}/>
                <Route path="/career-comparison" element={<CareerComparison />} />
                <Route path="/salary-calculator" element={<SalaryCalculator />} />
                <Route path="/chatbot" element={<Chatbot/>}/>
                <Route path="/" element={<Career />} />
                <Route path="/guide" element={<Guide />} />
            </Routes>
        </Router>
    );
}

export default App;