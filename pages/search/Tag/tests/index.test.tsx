import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Tag } from '../index';

describe('Tag', () => {
  describe('when is not visible', () => {
    it('does not render anything', () => {
      const { queryByTestId } = render(
        <Tag label="a label" isVisible={false} />,
      );
      expect(queryByTestId('tag-label-wrapper')).not.toBeInTheDocument();
    });
  });

  describe('when is visible and not loading', () => {
    it('renders the tag label', () => {
      render(<Tag label="a label" isVisible />);
      expect(screen.getByText('a label')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Tag label="a label" isVisible />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
