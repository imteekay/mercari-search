import { useQuery } from 'react-query';
import { ProductType } from 'Product/types/ProductType';
import { products } from './products';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProducts(category: string) {
  await sleep(500);
  switch (category) {
    case 'all':
      return products;
    case 'JavaScript':
      return [products[0]];
    case 'TypeScript':
      return [products[1]];
    default:
      return products;
  }
}

function fetchProduct(category: string) {
  return async () => getProducts(category);
}

export function useProducts(category: string = 'all') {
  return useQuery<ProductType[], Error>(
    ['products', category],
    fetchProduct(category),
  );
}
