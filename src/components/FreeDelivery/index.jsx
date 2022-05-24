import React from "react";
import PropTypes from 'prop-types';

import * as S from './style';

function FreeDelivery({ value = 0, minimumValue, children }) {
    return value > minimumValue ? <S.Wrapper>{children}</S.Wrapper> : null;
}

FreeDelivery.propTypes = {
    value: PropTypes.number.isRequired,
    minimumValue: PropTypes.number.isRequired,
};

export default FreeDelivery;
