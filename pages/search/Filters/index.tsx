import { Typography } from '@material-ui/core';

import Categories from './Categories';
import Statuses from './Statuses';
import Condition from './Condition';
import Shipping from './Shipping';
import Price from './Price';

export const Filters = () => {
  return (
    <>
      <Typography component="h2">Filter by</Typography>
      <Categories />
      <Statuses />
      <Condition />
      <Shipping />
      <Price />
    </>
  );
};
