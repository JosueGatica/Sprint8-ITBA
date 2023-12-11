import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded p-2 my-2">
      <h2 className="text-lg font-bold">
        <button
          className="text-[#DB5860] hover:underline"
          type="button"
          onClick={toggleAnswer} 
        >
          {question}
        </button>
      </h2>
      <div className={`collapse ${isOpen ? 'show' : ''}`}> 
        <div className="p-2">
          <p className="text-white">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
