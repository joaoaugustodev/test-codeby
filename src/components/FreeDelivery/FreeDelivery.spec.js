import { render, screen } from '@testing-library/react';

import FreeDelivery from '.';

describe('Test of ProductTitle component', () => {
  it('should be in document', () => {
    render(<FreeDelivery value={200} minimumValue={10}>Free</FreeDelivery>);

    const value = screen.getByTestId('free');

    expect(value).toBeInTheDocument();
  });

  it('should be not in document', () => {
    const { container } = render(<FreeDelivery value={200} minimumValue={1000}>Free</FreeDelivery>);

    expect(container).toBeEmptyDOMElement();
  });
});
