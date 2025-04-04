import { ReactNode, useState } from 'react';
import { createArray } from './helper.ts';
import Star from './Star.tsx';
import styled from 'styled-components';

const HorizontalDiv = styled.div`
  display: flex;
`;

const StarRating = ({ totalStars = 5 }: { totalStars: number }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      <HorizontalDiv>
        {createArray(totalStars)?.map((_n: ReactNode, i: number) => (
          <Star key={i} selected={selectedStars > i} onSelected={() => setSelectedStars(i + 1)} />
        ))}
      </HorizontalDiv>
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
