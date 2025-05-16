import React from 'react';

interface Props {
  price: string;
}

const MyPrice: React.FC<Props> = ({ price }) => {
  if (price.length > 5) {
    return (
      <div style={{ color: '#FF0F23', marginBottom: '1px' }}>
        $<span style={{ fontSize: '1.4em' }}>{`${price.slice(0, -4)}萬`}</span>
      </div>
    );
  } else {
    return (
      <div style={{ color: '#FF0F23', marginBottom: '1px' }}>
        $<span style={{ fontSize: '1.4em' }}>{price}</span>
      </div>
    );
  }
};

export default MyPrice;
