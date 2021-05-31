import { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import { ProductType } from 'Product/types/ProductType';
import Product from '../Product';
import { Skeleton } from './Skeleton';

type ProductListPropsType = {
  products: ProductType[] | undefined;
  isLoading: boolean;
};

export const ProductList: FunctionComponent<ProductListPropsType> = ({
  products,
  isLoading,
}) => {
  if (isLoading || !products) {
    return <Skeleton />;
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid
          item
          xs={6}
          md={3}
          key={`grid-${product.name}-${product.description}-${product.price}`}
        >
          <Product
            key={`product-${product.name}-${product.description}-${product.price}`}
            imageUrl={product.imageUrl}
            thumbUrl={product.thumbUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            discount={product.discount}
            isShippingFree={product.isShippingFree}
            isLoading={isLoading}
          />
        </Grid>
      ))}
    </Grid>
  );
};
