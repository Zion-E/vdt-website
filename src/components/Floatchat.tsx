import React from 'react';
import './Floatchat.css';
import chat from '../pictures/iconLogo/Group 144 (1).png'

const Floatchat: React.FC = () => {
  return (
    <button className="floating-button"><img src={chat} alt="chat-icon" className='chat-icon'/></button>
  );
};

export default Floatchat;
