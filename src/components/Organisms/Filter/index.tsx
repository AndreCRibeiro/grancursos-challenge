import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

// import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';

import { Container, FilterSmallScreens, FilterOpenedOnSmallScreens } from './styles';


const Filter: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const isTablet = useMediaQuery({ query: '(max-width: 820px)' })

  return (
    <Container>
      {
        isTablet ? (
          <FilterSmallScreens>
            <b>Filters</b>
            <FiFilter onClick={() => setShowFilters(!showFilters)} />
            {showFilters && (
              <FilterOpenedOnSmallScreens>
                <Molecules.FilterOptions onClickClose={() => setShowFilters(!showFilters)} />
              </FilterOpenedOnSmallScreens>
            )}
          </FilterSmallScreens>

        ) : (
          <div>
            <p>Filters</p>
            <Molecules.FilterOptions />
          </div>
        )
      }
    </Container>
  );
};

export default Filter;
