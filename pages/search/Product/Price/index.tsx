import React, { Fragment, FunctionComponent } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { ProductType } from 'Product/types/ProductType';
import { PriceWithDiscount } from './PriceWithDiscount';
import { OriginalPrice } from './OriginalPrice';
import { Discount } from './Discount';
import { getPriceInfo, PriceInfoType } from './getPriceInfo';

type PriceType = Pick<ProductType, 'price' | 'discount'>;
type PricePropsType = PriceType;

export const Price: FunctionComponent<PricePropsType> = ({
  price,
  discount,
}) => {
  const {
    priceWithDiscount,
    originalPrice,
    discountOff,
    hasDiscount,
  }: PriceInfoType = getPriceInfo(price, discount);

  return (
    <Fragment>
      <PriceWithDiscount price={priceWithDiscount} hasDiscount={hasDiscount} />
      <OriginalPrice price={originalPrice} />
      <Discount hasDiscount={hasDiscount} discountOff={discountOff} />
    </Fragment>
  );
};

export default Price;
