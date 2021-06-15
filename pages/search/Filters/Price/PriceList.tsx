import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { prices } from 'Product/Categories/prices';
import { useQueryStringForPrice } from '../../hooks/useQueryStringForPrice';

const PriceList = () => {
  const { updateRouteURL, isChecked } = useQueryStringForPrice();

  return (
    <RadioGroup aria-label="Status" name="status">
      {prices.map(({ minPrice, maxPrice, value }) => (
        <FormControlLabel
          key={`${minPrice}-${maxPrice}-${value}`}
          value={value}
          control={
            <Radio
              checked={isChecked(value)}
              onChange={() => {
                updateRouteURL({ minPrice, maxPrice });
              }}
            />
          }
          label={value}
        />
      ))}
    </RadioGroup>
  );
};

export default PriceList;
