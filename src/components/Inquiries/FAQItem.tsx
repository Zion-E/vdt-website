import React, { useState } from "react";
import './Faq.css'

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="row">
      <div onClick={toggleOpen} className='row freeze'>
        <div className="press press-bot col-4"><span>{isOpen ? "-" : "+"}</span></div> <h3 className='col press-bot'>{question}</h3>
        
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default FAQItem;
