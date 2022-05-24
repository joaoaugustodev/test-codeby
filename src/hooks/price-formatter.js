import PropTypes from 'prop-types';

function usePriceFormatter(price = 0, currency = 'BRL') {
  return Number(price).toLocaleString(window.navigator.language, { style: 'currency', currency: currency });
}

usePriceFormatter.propTypes = {
  price: PropTypes.number,
  currency: PropTypes.string
};

export default usePriceFormatter;
