import React, { useState } from 'react';
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState('light');

  function handleThemeClick() {
    document.body.classList.toggle("dark");
    const currentTheme = document.body.className;
    setTheme(currentTheme);    
  }

  return (
    <div className="header">
        <h3 className="headerTitle">
            Where in the world?
        </h3>
        <div className="themeToggle">
            <i className={ theme === 'dark' ? "fas fa-sun": "fas fa-moon" } onClick={handleThemeClick}></i>
            { theme === 'dark' ? "Light" :  "Dark" } Mode
        </div>
    </div>
  )
}

export default Header