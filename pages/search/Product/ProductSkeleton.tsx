import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

import { imageWrapperStyle, skeletonStyle } from '../Image/styles';
import { descriptionSkeletonStyle } from './TitleDescription/styles';

export const ProductSkeleton: FunctionComponent = () => (
  <Box mb={1}>
    <Skeleton
      variant="rect"
      width="100%"
      height={imageWrapperStyle.height}
      style={skeletonStyle}
      data-testid="image-skeleton-loader"
    />
    <Skeleton width="60%" height="24px" data-testid="name-skeleton-loader" />
    <Skeleton
      style={descriptionSkeletonStyle}
      height="20px"
      data-testid="description-skeleton-loader"
    />
    <Skeleton width="80%" height="18px" data-testid="price-skeleton-loader" />
    <Skeleton width="110px" height="40px" data-testid="tag-skeleton-loader" />
  </Box>
);

export default ProductSkeleton;
