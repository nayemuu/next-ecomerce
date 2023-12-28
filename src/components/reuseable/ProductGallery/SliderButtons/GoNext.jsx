'use client';
import { useState } from 'react';
import './SliderButton.css';

function GoNext({ className, style, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onClick={onClick}
      className={`slider-button ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0526 11.293C15.2322 11.4806 15.3332 11.7349 15.3332 12C15.3332 12.2652 15.2322 12.5195 15.0526 12.707L9.63129 18.364C9.54289 18.4595 9.43714 18.5357 9.32022 18.5881C9.2033 18.6405 9.07755 18.6681 8.9503 18.6693C8.82306 18.6704 8.69686 18.6451 8.57909 18.5948C8.46131 18.5446 8.35431 18.4703 8.26433 18.3764C8.17435 18.2825 8.10319 18.1709 8.05501 18.048C8.00682 17.9251 7.98257 17.7934 7.98368 17.6606C7.98478 17.5278 8.01122 17.3966 8.06145 17.2746C8.11167 17.1526 8.18468 17.0423 8.27621 16.95L13.02 12L8.27621 7.05002C8.10164 6.86142 8.00505 6.60882 8.00723 6.34662C8.00941 6.08442 8.1102 5.83361 8.28788 5.6482C8.46557 5.4628 8.70593 5.35763 8.9572 5.35535C9.20847 5.35307 9.45055 5.45386 9.63129 5.63602L15.0526 11.293Z"
          fill={`${isHovered ? '#38b449' : '#637381'}`}
        />
      </svg>
    </div>
  );
}

export default GoNext;
