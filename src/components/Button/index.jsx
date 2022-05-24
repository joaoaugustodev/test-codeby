import React from "react";

import * as S from './style';

function Button({ children }) {
  return (
    <S.Button>
      {children}
    </S.Button>
  );
}

export default Button;
