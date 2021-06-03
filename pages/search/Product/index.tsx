import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import { ProductType } from 'Product/types/ProductType';
import Image from '../Image';
import Tag from '../Tag';
import TitleDescription from './TitleDescription';
import Price from './Price';

export type ProductPropsType = ProductType;

export const Product: FunctionComponent<ProductPropsType> = ({
  imageUrl,
  thumbUrl,
  name,
  description,
  price,
  discount,
  isShippingFree,
}) => (
  <Box mb={1}>
    <Image imageUrl={imageUrl} thumbUrl={thumbUrl} imageAlt={name} />
    <TitleDescription name={name} description={description} />
    <Price price={price} discount={discount} />
    <Tag label="Free Shipping" isVisible={isShippingFree} />
  </Box>
);

export default Product;
