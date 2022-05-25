import React from "react";
import PropTypes from 'prop-types';

import usePriceFormatter from "../../hooks/price-formatter";

import * as S from './style';

function TotalPrice({ total, currency = 'BRL' }) {
  const price = usePriceFormatter(total, currency);

  return (
    <S.Wrapper data-testid="total">
      <S.TotalTitle>
        <span>Total</span>
        <span>{price}</span>
      </S.TotalTitle>
    </S.Wrapper>
  );
}

TotalPrice.propTypes = {
  total: PropTypes.number.isRequired,
  currency: PropTypes.string
};

export default TotalPrice;
