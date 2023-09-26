import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  const handleClick = () => { /* When header is clicked, opens new tab to LinkedIn */
    window.open('https://www.linkedin.com/in/ernestspiller/');
  };

  return (
    <header className={`header ${hovered ? 'hovered' : ''}`} 
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    onClick={handleClick}>
      <div className="name">{hovered ? 'LinkedIn' : 'ERNEST SPILLER'}</div>
    </header>
  );
}

export default Header;
