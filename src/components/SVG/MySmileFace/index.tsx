import React from 'react';

interface Props {
  size: string;
}

const MySmileFace: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="35" r="5" fill="black" />
      <circle cx="70" cy="35" r="5" fill="black" />
      <path
        d="M30 65 Q50 90, 70 65"
        stroke="black"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MySmileFace;
