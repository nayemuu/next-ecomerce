'use client';
import { useState } from 'react';
import './SliderButton.css';

function GoPrevious({ className, style, onClick }) {
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
      style={{ ...style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          d="M7.94741 12.707C7.76776 12.5194 7.66683 12.2651 7.66683 12C7.66683 11.7348 7.76776 11.4805 7.94741 11.293L13.3687 5.63598C13.4571 5.54047 13.5629 5.46428 13.6798 5.41188C13.7967 5.35947 13.9224 5.33188 14.0497 5.33073C14.1769 5.32957 14.3031 5.35487 14.4209 5.40516C14.5387 5.45544 14.6457 5.52969 14.7357 5.62358C14.8256 5.71747 14.8968 5.82913 14.945 5.95202C14.9932 6.07492 15.0174 6.2066 15.0163 6.33938C15.0152 6.47216 14.9888 6.60338 14.9386 6.72538C14.8883 6.84739 14.8153 6.95773 14.7238 7.04998L9.98004 12L14.7238 16.95C14.8984 17.1386 14.995 17.3912 14.9928 17.6534C14.9906 17.9156 14.8898 18.1664 14.7121 18.3518C14.5344 18.5372 14.2941 18.6424 14.0428 18.6447C13.7915 18.6469 13.5494 18.5461 13.3687 18.364L7.94741 12.707Z"
          fill={`${isHovered ? '#38b449' : '#637381'}`}
        />
      </svg>
    </div>
  );
}

export default GoPrevious;
