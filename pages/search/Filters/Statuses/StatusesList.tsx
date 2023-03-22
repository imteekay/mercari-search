import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { statuses } from 'Product/Categories/statuses';
import { useQueryStringForRadio } from '../../hooks/useQueryStringForRadio';

const StatusesList = () => {
  const { updateRouteURL, isChecked } = useQueryStringForRadio('status');

  return (
    <RadioGroup
      aria-label="Status"
      name="status"
      onChange={(element) => {
        updateRouteURL(element.target.value);
      }}
    >
      {statuses.map((status) => (
        <FormControlLabel
          key={status}
          value={status}
          control={<Radio checked={isChecked(status)} />}
          label={status}
        />
      ))}
    </RadioGroup>
  );
};

export default StatusesList;