import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { TitleDescription } from '../index';

const product: { name: string; description: string } = {
  name: 'product name',
  description: 'product description',
};

describe('TitleDescription', () => {
  describe('when finished loading', () => {
    it('renders the product name and description', () => {
      render(
        <TitleDescription
          name={product.name}
          description={product.description}
        />,
      );

      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <TitleDescription
        name={product.name}
        description={product.description}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
