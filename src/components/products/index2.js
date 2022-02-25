import React from 'react';
import {
  ProductsContainer,
  ProductButton,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductsHeading,
  ProductsWrapper,
  ProductTitle,
  ProductCard,
} from './productstyling';
import './desert.css';

const Deserts = ({ heading, data }) => {
  return (
    <ProductsContainer className='bgimg1'>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Deserts;
