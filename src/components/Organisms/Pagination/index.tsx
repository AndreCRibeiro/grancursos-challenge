import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// import * as Atoms from '../../Atoms';
// import * as Molecules from '../../Molecules';

import { Container, WhiteDot, NumbersDiv, NumberSelect } from './styles';

interface PaginationProps {
  pages: number[];
  selectedPage: number;
  onPageNumberClick: (page: number) => void;
  onPageForward: (page: number) => void;
  onPageBackwards: (page: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({
  pages,
  selectedPage,
  onPageNumberClick,
  onPageForward,
  onPageBackwards
}) => {
  return (
    <Container>
      <WhiteDot onClick={() => onPageBackwards(selectedPage)}>
        <FiChevronLeft />
      </WhiteDot>
      <NumbersDiv>
        {
          pages.map(number => (
            <NumberSelect selected={selectedPage === number} onClick={() => onPageNumberClick(number)}>
              <p>{number + 1}</p>
            </NumberSelect>
          ))
        }
      </NumbersDiv>
      <WhiteDot onClick={() => onPageForward(selectedPage)}>
        <FiChevronRight />
      </WhiteDot>
    </Container>
  );
};

export default Pagination;
