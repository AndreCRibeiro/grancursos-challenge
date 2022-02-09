import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// import * as Atoms from '../../Atoms';
import Button from '../Button';

import {
  Container,
  InfosDiv,
  DividerLine,
  PriceDiv,
  RatingDiv,
  ContainerMobile,
  InfosDivMobile,
} from './styles';
import { FiHeart, FiShoppingBag, FiStar, FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  product: string;
  company: string;
  description: string;
  price: number;
  photo: string;
  stars: number;
}


const ProductCard: React.FC<ProductCardProps> = ({ product, company, description, price, photo, stars }) => {
  const [mouseEnterProduct, setMouseEnterProduct] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 415px)' });

  return (
    <>
      {
        isMobile ? (
          <ContainerMobile
            onMouseEnter={() => setMouseEnterProduct(true)}
            onMouseLeave={() => setMouseEnterProduct(false)}
          >
            <div className='infosDivSeparator'>
              <InfosDivMobile>
                <img src={photo} alt="Product" />
                <div className='productsHeaderDiv'>
                  <h4>{product}</h4>
                  <h6>By <b>{company}</b></h6>
                </div>
              </InfosDivMobile>
              <p>{description}</p>
            </div>

            <DividerLine />
            <PriceDiv>
              <h4>
                {price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </h4>
              <div>
                <FiShoppingCart />
                <span>Free Shipping</span>
              </div>
              <Button buttonText='WISHLIST' icon={<FiHeart />} lighterBackgroundColor />
              <Button buttonText='ADD TO CART' icon={<FiShoppingBag />} />
            </PriceDiv>
            {mouseEnterProduct && (
              <RatingDiv>
                <span>{stars}</span>
                <FiStar />
              </RatingDiv>
            )}
          </ContainerMobile>
        ) : (
          <Container
            onMouseEnter={() => setMouseEnterProduct(true)}
            onMouseLeave={() => setMouseEnterProduct(false)}
          >
            <img src={photo} alt="Product" />
            <InfosDiv>
              <h4>{product}</h4>
              <h6>By <b>{company}</b></h6>
              <p>{description}</p>
            </InfosDiv>
            <DividerLine />
            <PriceDiv>
              <h4>
                {price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </h4>
              <div>
                <FiShoppingCart />
                <span>Free Shipping</span>
              </div>
              <Button buttonText='WISHLIST' icon={<FiHeart />} lighterBackgroundColor />
              <Button buttonText='ADD TO CART' icon={<FiShoppingBag />} />
            </PriceDiv>
            {mouseEnterProduct && (
              <RatingDiv>
                <span>{stars}</span>
                <FiStar />
              </RatingDiv>
            )}
          </Container>
        )
      }
    </>
  );
};

export default ProductCard;
