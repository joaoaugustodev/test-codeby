import React from "react";

import CartCard from '../CartCard';
import Container from '../Container';
import ProductCard from '../ProductCard';
import ProductPrice from '../ProductPrice';
import ProductImage from '../ProductImage';
import ProductTitle from '../ProductTitle';
import TotalPrice from "../TotalPrice";
import Button from "../Button";
import FreeDelivery from "../FreeDelivery";

import calculateTotalPrice from "../../utils/calculate-total-price";
import api from '../../confs/abaixo-10-reais.json';

import * as S from './style';

function App() {
  return (
    <S.App>
      <CartCard>
        <header>
          <Container>
              <S.Title>Meu carrinho</S.Title>
          </Container>
        </header>

        <hr />

        <Container>
            {
              api.items.map(product => (
                <ProductCard key={product.id}>
                  <ProductImage src={product.imageUrl} />
    
                  <Container>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductPrice isPrice>{product.price}</ProductPrice>
                    <ProductPrice>{product.sellingPrice}</ProductPrice>
                  </Container>
                </ProductCard>
              ))
            }
        </Container>

        <hr />

        <Container>
          <TotalPrice total={calculateTotalPrice(api.totalizers)} />

          <FreeDelivery value={calculateTotalPrice(api.totalizers)} minimumValue={10}>
            Parabéns, sua compra tem frete grátis !
          </FreeDelivery>
        </Container>

        <hr />

        <Container>
          <Button>Finalizar compra</Button>
        </Container>
      </CartCard>
    </S.App>
  );
}

export default App;
