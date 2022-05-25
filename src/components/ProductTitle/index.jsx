import React from "react";

import * as S from './style';

function ProductTitle({ children }) {
  return <S.Title data-testid="title">{children}</S.Title>
}

export default ProductTitle;
