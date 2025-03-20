import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './CareerQuiz.css'; // Import the CSS file

function CareerQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [quizResult, setQuizResult] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    // Quiz questions (10 questions)
    const quizQuestions = [
        { question: "What subjects do you enjoy the most?", options: ["Science", "Commerce", "Arts", "Technology"] },
        { question: "What type of work environment do you prefer?", options: ["Office", "Field Work", "Remote", "Creative Space"] },
        { question: "How do you prefer to solve problems?", options: ["Analytically", "Creatively", "Collaboratively", "Independently"] },
        { question: "What are your favorite activities?", options: ["Reading and Writing", "Building and Fixing Things", "Designing and Creating Art", "Coding and Solving Puzzles"] },
        { question: "How do you handle challenges?", options: ["Plan and Strategize", "Experiment and Explore", "Seek Help from Others", "Trust My Instincts"] },
        { question: "What skills do you feel most confident in?", options: ["Math and Logic", "Communication and Networking", "Art and Design", "Technology and Programming"] },
        { question: "What type of projects excite you the most?", options: ["Research and Development", "Business and Marketing", "Creative and Artistic", "Technical and Innovative"] },
        { question: "How do you prefer to learn new things?", options: ["Through Experiments and Practice", "Through Reading and Analysis", "Through Collaboration and Discussion", "Through Visuals and Creativity"] },
        { question: "What is your ideal work schedule?", options: ["Structured and Predictable", "Flexible and Adaptive", "Creative and Unconventional", "Fast-Paced and Dynamic"] },
        { question: "What motivates you the most?", options: ["Solving Complex Problems", "Helping Others and Making an Impact", "Creating Something Unique", "Learning and Innovating"] },
    ];

    // Load saved state from localStorage on component mount
    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem('careerQuizState'));
        if (savedState) {
            setCurrentQuestion(savedState.currentQuestion);
            setAnswers(savedState.answers);
        }
    }, []);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('careerQuizState', JSON.stringify({ currentQuestion, answers }));
    }, [currentQuestion, answers]);

    // Handle quiz answer selection
    const handleQuizAnswer = (answer) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateQuizResult(newAnswers);
        }
    };

    // Calculate quiz result
    const calculateQuizResult = (answers) => {
        // Improved logic to determine result based on answers
        const scienceCount = answers.filter((answer) => answer === "Science" || answer === "Analytically" || answer === "Math and Logic").length;
        const commerceCount = answers.filter((answer) => answer === "Commerce" || answer === "Business and Marketing" || answer === "Communication and Networking").length;
        const artsCount = answers.filter((answer) => answer === "Arts" || answer === "Creative and Artistic" || answer === "Designing and Creating Art").length;
        const techCount = answers.filter((answer) => answer === "Technology" || answer === "Coding and Solving Puzzles" || answer === "Technical and Innovative").length;

        if (scienceCount > commerceCount && scienceCount > artsCount && scienceCount > techCount) {
            setQuizResult("Engineering, Medical, or Scientific Fields");
        } else if (commerceCount > scienceCount && commerceCount > artsCount && commerceCount > techCount) {
            setQuizResult("Commerce, Business, or Marketing Fields");
        } else if (artsCount > scienceCount && artsCount > commerceCount && artsCount > techCount) {
            setQuizResult("Arts, Design, or Humanities Fields");
        } else {
            setQuizResult("Technology, IT, or Innovation Fields");
        }
    };

    // Reset quiz
    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setQuizResult(null);
        localStorage.removeItem('careerQuizState'); // Clear saved state
    };

    return (
        <div className="career-quiz-page">
            <div className="career-quiz-content">
                <h1>Career Quiz</h1>
                {quizResult ? (
                    <div className="quiz-result">
                        <h3>Your Suggested Career Path:</h3>
                        <p>{quizResult}</p>
                        <button onClick={resetQuiz}>Take Quiz Again</button>
                        <button onClick={() => navigate('/guide')}>Back to Career Guide</button>
                    </div>
                ) : (
                    <div className="quiz-question">
                        <h3>{quizQuestions[currentQuestion].question}</h3>
                        <div className="quiz-options">
                            {quizQuestions[currentQuestion].options.map((option, index) => (
                                <button key={index} onClick={() => handleQuizAnswer(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CareerQuiz;