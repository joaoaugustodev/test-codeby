import { render, screen } from '@testing-library/react';

import ProductTilte from '.';

describe('Test of ProductTitle component', () => {
  it('should be in document', () => {
    render(<ProductTilte>Um título</ProductTilte>)

    const value = screen.getByText('Um título');

    expect(value).toBeInTheDocument();
  });

  it('should be empty value', () => {
    render(<ProductTilte></ProductTilte>)

    const value = screen.getByTestId('title');

    expect(value).toHaveTextContent('');
  });
});
