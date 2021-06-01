import Grid from '@material-ui/core/Grid';
import ProductSkeleton from '../Product/ProductSkeleton';

const productsSkeleton = new Array(8).fill(0);

export const Skeleton = () => (
  <Grid container spacing={3}>
    {productsSkeleton.map((_, id) => (
      <Grid item xs={6} md={3} key={`product-skeleton-grid-${id}`}>
        <ProductSkeleton />
      </Grid>
    ))}
  </Grid>
);
