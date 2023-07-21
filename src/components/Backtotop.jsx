import React, { useState, useEffect } from 'react';
import './Backtotop.css'
import BTT from '../pictures/iconLogo/Group 144.png'

const Backtotop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setShowButton(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showButton) {
    return null;
  }

  return (

    <button className='backtop'>
    <img src={BTT} alt="backtotop" onClick={handleBackToTop} className='BTT'/>
  </button>
  );
};

export default Backtotop;
