export enum PriceValue {
  Under25 = 'Under $25',
  Between25and50 = '$25 to $50',
  Between50and100 = '$50 to $100',
  Between100and200 = '$100 to $200',
  Over200 = '$200 and up',
}

export const prices = [
  { maxPrice: '25', value: 'Under $25' },
  { minPrice: '25', maxPrice: '50', value: '$25 to $50' },
  { minPrice: '50', maxPrice: '100', value: '$50 to $100' },
  { minPrice: '100', maxPrice: '200', value: '$100 to $200' },
  { minPrice: '200', value: '$200 and up' },
];
