import React from "react";

import * as S from './style';

function CartCard({ children }) {
  return (
    <S.Cart>
      {children}
    </S.Cart>
  );
}

export default CartCard;
