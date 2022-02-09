import React from 'react';
import { usePageContext } from '../../../hooks/selectedPageContext'

import { Dashboard } from '../DashboardPage';
import { Others } from '../Others';


export const SelectedPage: React.FC = () => {
  const { selectedPage } = usePageContext();

  return (
    <>
      {selectedPage === 'Dashboard'
        ? (<Dashboard />)
        : (<Others />)
      }
    </>
  );
};
