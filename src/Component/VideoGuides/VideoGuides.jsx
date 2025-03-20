import React from 'react';
import './VideoGuides.css'; // Import the CSS file

function VideoGuides() {
    // Video guides and webinars data
    const videoGuides = [
        { title: "How to Choose the Right Career", link: "https://youtu.be/CPAhCOMhJds?si=5-1Os5rYq7IAC3wP" },
        { title: "Top Skills for 2025", link: "https://youtu.be/ug1LXrzKPVQ?si=x1cYs7N1UoF4mAMO" },
        { title: "Career Planning for Students", link: "https://youtu.be/MZe9zdjxpzQ?si=xfl_9z12H5tDWiz4" },
        { title: "How to Build a logic in programming", link: "https://youtu.be/3xC0F9bj9FU?si=2-Em6FuO-G_fKgVu" },
    ];

    return (
        <div className="video-guides-page">
            <div className="video-guides-content">
                <h1>Video Guides and Webinars</h1>
                <p>Watch our curated video guides and webinars to get career guidance:</p>

                {/* Video Grid */}
                <div className="video-grid">
                    {videoGuides.map((video, index) => (
                        <div key={index} className="video-card">
                            <h3>{video.title}</h3>
                            <div className="video-container">
                                <iframe
                                    src={video.link}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <a
                                href={video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="watch-now-button"
                            >
                                Watch Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VideoGuides;