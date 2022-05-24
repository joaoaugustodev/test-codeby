import React from "react";
import PropTypes from 'prop-types';

import * as S from './style';

function ProductImage({ src }) {
  return <S.Image src={src} loading="lazy" />
}

ProductImage.propTypes  = {
  src: PropTypes.string.isRequired
}

export default ProductImage;
