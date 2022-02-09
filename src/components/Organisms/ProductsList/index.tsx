import React from 'react';
import { FiMenu, FiGrid } from 'react-icons/fi';

import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';

import { Container, HeaderProduct, IconDiv } from './styles';

interface ProductListProps {
  data: {
    products: [
      id: 1,
      product: string,
      company: string,
      description: string,
      price: number,
      photo: string,
      stars: number,
    ]
  };
  loading: boolean;
}


const ProductList: React.FC<ProductListProps> = ({ data, loading }) => {
  return (
    <Container>
      <HeaderProduct>
        <span>{loading ? '--' : data?.products.length} results found in 5ms</span>
        <div>
          <Atoms.DropDown
            changeState={state => console.log(state)}
            options={[{ value: 'all', label: 'Default' }, { value: 'others', label: 'Others' }]}
            placeholderText="Default"
          />
          <IconDiv className="icon">
            <FiGrid />
          </IconDiv>
          <IconDiv>
            <FiMenu />
          </IconDiv>
        </div>
      </HeaderProduct>
      <Atoms.InputField placeholderText='Search here...' />
      {
        !loading && data?.products.map((product: any) => (
          <Molecules.ProductCard
            product={product.product}
            company={product.company}
            description={product.description}
            price={product.price}
            photo={product.photo}
            stars={product.stars}
          />
        ))
      }
    </Container>
  );
};

export default ProductList;
