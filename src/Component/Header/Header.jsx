import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css'; // Import the CSS file
import logo from './logo.jpg';
function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state
    const [user, setUser] = useState(null); // Store user data

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        if (isLogin) {
            // Simulate login logic
            console.log('Logging in...');
            console.log('Email:', email);
            console.log('Password:', password);
            setIsLoggedIn(true);
            setUser({ email }); // Store user data
        } else {
            // Simulate signup logic
            console.log('Signing up...');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            setIsLoggedIn(true);
            setUser({ name, email }); // Store user data
        }
        closeModal();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <div className='full'>
            <div className='one'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='two'>
                <Link to="/">Home</Link>
                <Link to="/counselling">Counselling</Link>
                <Link to="/guide">Guide</Link>
                <Link to="/career">Career</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Us</Link>
            </div>
            <div className='three'>
                {isLoggedIn ? (
                    <>
                        <button onClick={() => alert(`Welcome, ${user.name || user.email}!`)}>
                            User Profile
                        </button>
                        <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button onClick={openModal}>Sign up/Login</button>
                )}
            </div>

            {/* Modal for Login/Signup */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-button" onClick={closeModal}>×</button>
                        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                        <form onSubmit={handleSubmit}>
                            {!isLogin && (
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" required />
                                </div>
                            )}
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" required />
                            </div>
                            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                        </form>
                        <p>
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
                                {isLogin ? 'Sign Up' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;