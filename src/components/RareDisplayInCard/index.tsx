import React from 'react';

interface Props {
  rare: string;
}

const RareDisplayInCard: React.FC<Props> = ({ rare }) => {
  const location = window.location.pathname;
  let displayRare = rare;
  if (location == '/trade' && rare == '一般版本') {
    displayRare = '';
  }
  return <>{displayRare}</>;
};

export default RareDisplayInCard;
