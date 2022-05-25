import { render, screen } from '@testing-library/react';

import TotalPrice from '.';

describe('Test of ProductTitle component', () => {
  it('should be in document', () => {
    render(<TotalPrice total={200} />)

    const value = screen.getByTestId('total');

    expect(value).toBeInTheDocument();
  });

  it('should be return formatted price', () => {
    render(<TotalPrice total={200} />)

    const value = screen.getByText('R$200.00');

    expect(value).toBeInTheDocument();
  });

  it('should be return formatted price in currency dolar', () => {
    render(<TotalPrice total={200} currency="USD" />)

    const value = screen.getByText('$200.00');

    expect(value).toBeInTheDocument();
  });
});
