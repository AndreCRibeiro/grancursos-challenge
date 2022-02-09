import React, { useState, useCallback } from 'react';
import { DashboardTemplate } from '../../Templates/DashboardTemplate';
import { api } from '../../../services/api';

export const Dashboard: React.FC = () => {
  const [productsList, setProductsList] = useState();
  const [loading, setLoading] = useState(false);

  const reDoRequisition = useCallback(
    async () => {
      setLoading(true);
      await api.get('/products')
        .then(response => { setProductsList(response.data); setLoading(false) })
    },
    [],
  );

  return (
    <DashboardTemplate
      productsList={productsList}
      handleChangePagination={reDoRequisition}
      loading={loading}
    />
  );
};
