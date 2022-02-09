import React, { useState, useEffect } from 'react';

import * as Organisms from '../../Organisms';

import { Container } from './styles';

const pages = 10;

interface DashboardTemplateProps {
  productsList: any;
  handleChangePagination: () => void;
  loading: boolean;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  productsList,
  loading,
  handleChangePagination
}) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handlePaginationBackwards = (page: number) => {
    if (page < 1) return;
    setSelectedPage(page - 1);
  }

  const handlePaginationFoward = (page: number) => {
    if (page + 1 === pages) return;
    setSelectedPage(page + 1);
  }

  useEffect(() => {
    handleChangePagination()
  }, [selectedPage, handleChangePagination]);

  console.log({ loading })

  return (
    <Container>
      <Organisms.Header />
      <main>
        <Organisms.Filter />
        <Organisms.ProductsList data={productsList} loading={loading} />
      </main>
      <footer>
        <Organisms.Pagination
          pages={Array.from(Array(10).keys())}
          selectedPage={selectedPage}
          onPageNumberClick={(e) => setSelectedPage(e)}
          onPageBackwards={(e) => handlePaginationBackwards(e)}
          onPageForward={(e) => handlePaginationFoward(e)}
        />
      </footer>
    </Container>
  );
};

