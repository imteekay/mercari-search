import { useQuery } from 'react-query';
import { ParsedUrlQuery } from 'querystring';
import { ProductType } from 'Product/types/ProductType';
import { products } from './products';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProducts(query: ParsedUrlQuery) {
  await sleep(500);
  return products;
}

function fetchProduct(query: ParsedUrlQuery) {
  return async () => getProducts(query);
}

export function useProducts(query: ParsedUrlQuery) {
  return useQuery<ProductType[], Error>(
    ['products', query],
    fetchProduct(query),
  );
}
