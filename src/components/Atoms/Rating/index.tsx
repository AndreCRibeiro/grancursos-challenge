import React from 'react';
import { FiStar } from 'react-icons/fi';

import { Container } from './styles';

interface RatingProps {
  numberOfStars: 1 | 2 | 3 | 4 | 5;
  numberOfElements: string;
}

const Rating: React.FC<RatingProps> = ({ numberOfStars, numberOfElements }) => {
  return (
    <Container>
      <div>
        <FiStar fill={numberOfStars >= 1 ? `var(--blue-600)` : '#fff'} />
        <FiStar fill={numberOfStars >= 2 ? `var(--blue-600)` : '#fff'} />
        <FiStar fill={numberOfStars >= 3 ? `var(--blue-600)` : '#fff'} />
        <FiStar fill={numberOfStars >= 4 ? `var(--blue-600)` : '#fff'} />
        <FiStar fill={numberOfStars >= 5 ? `var(--blue-600)` : '#fff'} />
        <span>& up</span>
      </div>

      <span>{numberOfElements}</span>
    </Container>
  );
};

export default Rating;
