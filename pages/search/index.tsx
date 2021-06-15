import { FunctionComponent } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { useProducts } from './hooks/useProducts';
import { Filters } from './Filters';
import { ProductList } from './ProductList';

export const Search: FunctionComponent = () => {
  const { data, isLoading, isError } = useProducts();

  if (isError) {
    return <p>error!!</p>;
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item sm={2}>
          <Filters />
        </Grid>
        <Grid item sm={10}>
          <ProductList products={data} isLoading={isLoading} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
