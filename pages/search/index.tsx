import { FunctionComponent } from 'react';

import { useCategory } from './hooks/useCategory';
import { useProducts } from './hooks/useProducts';
import { ProductList } from './ProductList';
import { Categories } from './Categories';

export const Search: FunctionComponent = () => {
  const { category, updateCategory, categories } = useCategory();
  const { data, isLoading, isError } = useProducts(category);

  if (isError) {
    return <p>error!!</p>;
  }

  return (
    <>
      <Categories categories={categories} handleClick={updateCategory} />
      <ProductList products={data} isLoading={isLoading} />
    </>
  );
};

export default Search;
