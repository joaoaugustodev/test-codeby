import { render, screen } from "@testing-library/react";

import ProductPrice from ".";

describe('Test of ProductPrice component', () => {
  it('should be exists in document', () => {
   render(<ProductPrice>200</ProductPrice>)

    const value = screen.getByText('R$200.00');

    expect(value).toBeInTheDocument();
  });

  it('should be exists in document with value R$0.00', () => {
    render(<ProductPrice></ProductPrice>)
 
     const value = screen.getByText('R$0.00');
 
     expect(value).toBeInTheDocument();
   });

   it('should be exists in document with dolar value $0.00', () => {
    render(<ProductPrice currency="USD"></ProductPrice>)
 
     const value = screen.getByText('$0.00');
 
     expect(value).toBeInTheDocument();
   });

   it('should be exists in document with euro value €0.00', () => {
    render(<ProductPrice currency="EUR"></ProductPrice>)
 
     const value = screen.getByText('€0.00');
 
     expect(value).toBeInTheDocument();
   });
});
