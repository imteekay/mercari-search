import { ChangeEvent } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { conditions } from 'Product/Categories/conditions';
import { useQueryStringForCheckbox } from '../../hooks/useQueryStringForCheckbox';

const ConditionList = () => {
  const { updateRouteURL, isChecked } = useQueryStringForCheckbox('conditions');

  const onChange =
    (condition: string) =>
    (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      updateRouteURL(condition, checked);
    };

  return (
    <ul>
      {conditions.map((condition) => (
        <li>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name={`condition-${condition}`}
                onChange={onChange(condition)}
                checked={isChecked(condition)}
              />
            }
            label={condition}
          />
        </li>
      ))}
    </ul>
  );
};

export default ConditionList;
