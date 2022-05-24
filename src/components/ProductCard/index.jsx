import React from "react";

import * as S from './style';

function ProductCard({ children }) {
  return (
    <S.Wrapper>{children}</S.Wrapper>
  );
}

export default ProductCard;
