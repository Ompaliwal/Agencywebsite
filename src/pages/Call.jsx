import React from 'react';
import './Call.css';

const Call = () => {
  return (
    <div className="call-container">
      <div className="call-content">
        <div className="call-text">
          <h2>More Than Just Videos: We're Your Creative Partners!</h2>
          <p>Got questions, project ideas, or just want to say hi? We're all ears!</p>
        </div>
        
        <div className="call-action">
          <h3>Book a free strategy call</h3>
          <a 
            href="https://cal.com/bagora-agency-pfnups/secret" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <button className="book-button">Book now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Call;