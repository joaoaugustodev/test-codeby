import React from "react";

import * as S from './style';

function Container({ children }) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default Container;
