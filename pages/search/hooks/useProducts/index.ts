import { useQuery } from 'react-query';
import { products } from './products';

function fetchProduct(category: string) {
  return function () {
    switch (category) {
      case 'all':
        return new Promise((resolve) => resolve(products));
      case 'JavaScript':
        return new Promise((resolve) => resolve([products[0]]));
      case 'TypeScript':
        return new Promise((resolve) => resolve([products[1]]));
      default:
        return new Promise((resolve) => resolve(products));
    }
  };
}

export function useProducts(category: string) {
  return useQuery(['products', category], fetchProduct(category));
}
