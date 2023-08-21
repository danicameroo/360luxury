import React, { useState } from 'react';
import './Select.css'

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${isOpen ? 'open' : ''}`}>
      <div className="selected-option" onClick={toggleOpen}>
        {selectedOption ? selectedOption : 'Select an option'}
      </div>
      {isOpen && (
        <ul className="options">
          <li onClick={() => handleOptionClick('Option 1')}>Option 1</li>
          <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
          <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Select;