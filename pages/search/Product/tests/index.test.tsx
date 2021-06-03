import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Product, ProductPropsType } from '../index';

describe('Product', () => {
  const product: ProductPropsType = {
    imageUrl: 'url.com.br',
    thumbUrl: 'url.com.br',
    name: 'The cool product',
    description: 'A cool product',
    price: 100,
    discount: 20,
    isShippingFree: true,
  };

  describe('when the product has a discount', () => {
    it('shows the price', () => {
      render(<Product {...product} />);
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText('Free Shipping')).toBeInTheDocument();
      expect(screen.getByText('$100')).toBeInTheDocument();
      expect(screen.getByText('$80')).toBeInTheDocument();
      expect(screen.getByText('20% OFF')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Product {...product} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
