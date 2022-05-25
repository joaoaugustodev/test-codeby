import { render, screen } from "@testing-library/react";

import ProductImage from ".";

describe('Test of ProductPrice component', () => {
  it('should be in document', () => {
   render(<ProductImage src="https://images.pexels.com/photos/8539548/pexels-photo-8539548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />)

    const value = screen.getByTestId('image');

    expect(value).toBeInTheDocument();
  });

  it('should be in document a skeleton without prop src', () => {
    render(<ProductImage src="" />)
 
     const value = screen.getByTestId('image-skeleton');
 
     expect(value).toBeInTheDocument();
   });
});
