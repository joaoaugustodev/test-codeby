import usePriceFormatted from './price-formatter';

describe('Test price formatter hook', () => {
  it('should be return a dolar formatted', () => {
    const value = usePriceFormatted(100, 'USD');

    expect(value).toBe('$100.00');
  });

  it('should be return a euro formatted', () => {
    const value = usePriceFormatted(100, 'EUR');

    expect(value).toBe('€100.00');
  });

  it('should be return a real formatted', () => {
    const value = usePriceFormatted(100);

    expect(value).toBe('R$100.00');
  });

  it('should be return a real formatted like R$0.00 without parameters', () => {
    const value = usePriceFormatted();

    expect(value).toBe('R$0.00');
  });

  it('should be return a real formatted like R$0.00 with null parameters', () => {
    const value = usePriceFormatted(null);

    expect(value).toBe('R$0.00');
  });

  it('should be return a real formatted like R$10.00 with string parameters', () => {
    const value = usePriceFormatted('10');

    expect(value).toBe('R$10.00');
  });


  it('should be return a real formatted like R$0.00 with "abc" string parameter', () => {
    const value = usePriceFormatted('abc');

    expect(value).toBe('R$0.00');
  });
});