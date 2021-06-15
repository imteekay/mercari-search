import { useRouter } from 'next/router';
import { PriceValue } from 'Product/Categories/prices';

type PriceQueryStrings = {
  minPrice: string | undefined;
  maxPrice: string | undefined;
};

type Mapper = {
  [key: string]: {
    minPrice?: string;
    maxPrice?: string;
  };
};

const valueToPricesMapper: Mapper = {
  [PriceValue.Under25]: { maxPrice: '25' },
  [PriceValue.Between25and50]: { minPrice: '25', maxPrice: '50' },
  [PriceValue.Between50and100]: { minPrice: '50', maxPrice: '100' },
  [PriceValue.Between100and200]: { minPrice: '100', maxPrice: '200' },
  [PriceValue.Over200]: { minPrice: '200' },
};

export function useQueryStringForPrice() {
  const { push, pathname, query } = useRouter();

  function isChecked(value: string) {
    const { minPrice: fieldMinPrice, maxPrice: fieldMaxPrice } = query;
    const { minPrice, maxPrice } = valueToPricesMapper[value];
    return minPrice === fieldMinPrice && maxPrice === fieldMaxPrice;
  }

  function updateRouteURL({ minPrice, maxPrice }: PriceQueryStrings) {
    if (!maxPrice) {
      const { maxPrice: removedMaxPrice, ...queryWithoutMaxPrice } = query;

      push({
        pathname,
        query: {
          ...queryWithoutMaxPrice,
          minPrice,
        },
      });
    }

    if (!minPrice) {
      const { minPrice: removedMinPrice, ...queryWithoutMinPrice } = query;

      push({
        pathname,
        query: {
          ...queryWithoutMinPrice,
          maxPrice,
        },
      });
    }

    if (minPrice && maxPrice) {
      push({
        pathname,
        query: {
          ...query,
          minPrice,
          maxPrice,
        },
      });
    }
  }

  return { updateRouteURL, isChecked };
}
