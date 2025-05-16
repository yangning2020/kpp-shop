import React from 'react';

interface Props {
  level: number;
  size: number;
}

const LevelDisplay: React.FC<Props> = ({ level, size }) => {
  const levelSize = size * 0.9;
  const intPart = Math.floor(levelSize); // -> 12
  const levelTextPxStr = intPart.toString() + 'px'; // -> "12"
  const numberPxStr = size.toString() + 'px'; // -> "12"

  let background = '#8BD29B';

  if (level == 3) {
    background = '#7BCDEF';
  } else if (level == 4) {
    background = '#FEBB8B';
  } else if (level == 5) {
    background = '#EE672A';
  } else if (level == 6) {
    background = '#F04C49';
  } else if (level == 7) {
    background = 'black';
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        background: background,
        color: 'white',
        height: numberPxStr,
        lineHeight: '1',
        fontWeight: 'bold',
        borderRadius: '3px',
        padding: '1px',
      }}
    >
      <div style={{ fontSize: levelTextPxStr }}>LV</div>
      <div style={{ fontSize: numberPxStr }}>{level}</div>
    </div>
  );
};

export default LevelDisplay;
