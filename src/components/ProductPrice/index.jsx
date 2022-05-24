import React from "react";
import PropTypes from 'prop-types';

import usePriceFormatter from "../../hooks/price-formatter";

import * as S from './style';

function ProductPrice({ isPrice, currency = 'BRL', children }) {
  const priceFornatted = usePriceFormatter(children, currency);

  return (
    <S.Price isPrice={isPrice}>{priceFornatted}</S.Price>
  );
}

ProductPrice.propTypes = {
  isPrice: PropTypes.bool,
  currency: PropTypes.string
};

export default ProductPrice;
