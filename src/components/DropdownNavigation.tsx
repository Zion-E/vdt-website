import React, { useState } from "react";
import './DropdownNavigation.css'

interface NavigationItem {
  label: string;
  link: string;
}

interface DropdownNavigationProps {
  items: NavigationItem[];
}

const DropdownNavigation: React.FC<DropdownNavigationProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-navigation ${isOpen ? "open" : ""}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Menu
      </button>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownNavigation;
