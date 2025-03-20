import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Chatbot.css'; // Import the CSS file

function Chatbot() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function

    // Pre-defined responses for common questions (converted to lowercase for matching)
    const chatbotResponses = {
        "how to become a software engineer": "Start with a B.Tech in Computer Science and learn programming languages like Java or Python.",
        "what is the salary of a doctor": "The average salary of a doctor ranges from $80,000 to $200,000 depending on experience and specialization.",
        "what are the best courses after b.tech": "You can pursue an MBA, specialize in Data Science, or explore certifications in your field of interest.",
        "how to start a career in data science": "Learn Python, R, and data analysis tools like Pandas and TensorFlow. Build projects and gain experience through internships.",
        "what skills are required for a graphic designer": "Graphic designers need skills in design tools like Adobe Photoshop, Illustrator, and creativity.",
        "what is the job growth for software engineers": "The job growth for software engineers is high, with a projected increase of 22% over the next decade."
    };

    // Handle user input and generate chatbot response
    const handleUserInput = () => {
        if (!userInput.trim()) return; // Ignore empty input

        // Normalize input (convert to lowercase and trim spaces)
        const normalizedInput = userInput.toLowerCase().trim();

        // Add user's message to chat history
        setChatHistory((prev) => [...prev, { sender: 'user', message: userInput }]);

        // Find a matching response
        const response = chatbotResponses[normalizedInput] || "I'm sorry, I don't have an answer for that. Can you ask something else?";
        setChatHistory((prev) => [...prev, { sender: 'bot', message: response }]);

        // Clear the input field
        setUserInput('');
    };

    return (
        <div className="chatbot-page">
            <div className="chatbot-content">
                <h1>Virtual Career Mentor</h1>
                <p>Ask me anything about careers, education, or job opportunities:</p>

                {/* Chat History */}
                <div className="chat-history">
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`chat-message ${chat.sender}`}>
                            <strong>{chat.sender === 'user' ? 'You' : 'Career Mentor'}:</strong> {chat.message}
                        </div>
                    ))}
                </div>

                {/* User Input */}
                <div className="user-input">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your question here..."
                        onKeyDown={(e) => e.key === 'Enter' && handleUserInput()}
                    />
                    <button onClick={handleUserInput}>Send</button>
                </div>
            </div>
            <button onClick={() => navigate('/career')}>Back to Career Tools</button>
        </div>
    );
}

export default Chatbot;