import { ChangeEvent } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useQueryStringForCheckbox } from '../../hooks/useQueryStringForCheckbox';

const ShippingList = () => {
  const { updateRouteURL, isChecked } = useQueryStringForCheckbox('shipping');

  const onChange =
    (shippingType: string) =>
    (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      updateRouteURL(shippingType, checked);
    };

  return (
    <ul>
      <li>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              name="shipping"
              onChange={onChange('Free Shipping')}
              checked={isChecked('Free Shipping')}
            />
          }
          label="Free Shipping"
        />
      </li>
    </ul>
  );
};

export default ShippingList;
