import React from "react";
import PropTypes from 'prop-types';

import * as S from './style';

function ProductImage({ src }) {
  return src 
    ? <S.Image src={src} loading="lazy" data-testid="image" /> 
    : <S.ImageSkeleton data-testid="image-skeleton" />;
}

ProductImage.propTypes  = {
  src: PropTypes.string.isRequired
}

export default ProductImage;
