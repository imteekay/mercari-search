import { Fragment, FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';

import { ProductType } from 'Product/types/ProductType';
import { descriptionStyle, descriptionSkeletonStyle } from './styles';

type TitleDescriptionType = Pick<ProductType, 'name' | 'description'>;
type TitleDescriptionPropsType = TitleDescriptionType;

export const TitleDescription: FunctionComponent<TitleDescriptionPropsType> = ({
  name,
  description,
}) => (
  <Fragment>
    <Typography data-testid="product-name">{name}</Typography>
    <Typography
      data-testid="product-description"
      color="textSecondary"
      variant="body2"
      style={descriptionStyle}
    >
      {description}
    </Typography>
  </Fragment>
);

export default TitleDescription;
