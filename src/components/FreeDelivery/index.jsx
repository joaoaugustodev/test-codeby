import React from "react";
import PropTypes from 'prop-types';

import * as S from './style';

function FreeDelivery({ value = 0, children }) {
    return value > 10 ? <S.Wrapper>{children}</S.Wrapper> : null;
}

FreeDelivery.propTypes = {
    value: PropTypes.number.isRequired
};

export default FreeDelivery;
