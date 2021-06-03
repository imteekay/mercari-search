import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Price } from '../index';

describe('Price', () => {
  describe('when the product has a discount', () => {
    it('shows the price', () => {
      render(<Price price={100} discount={20} />);
      expect(screen.getByText('$100')).toBeInTheDocument();
      expect(screen.getByText('$80')).toBeInTheDocument();
      expect(screen.getByText('20% OFF')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Price price={100} discount={20} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
