import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Image, ImagePropsType } from '../index';

describe('Image', () => {
  const imageProps: ImagePropsType = {
    imageUrl: 'url.com.br',
    thumbUrl: 'url.com.br',
    imageAlt: 'the image alt',
  };

  it('has no accessibility violations', async () => {
    const { container } = render(<Image {...imageProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
