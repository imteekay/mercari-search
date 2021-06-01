import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import { tabStyle } from './styles';

type TagProps = {
  label: string;
  isVisible: boolean;
};

export const Tag: FunctionComponent<TagProps> = ({ label, isVisible }) => {
  if (!isVisible) return null;

  return (
    <Box mt={1} data-testid="tag-label-wrapper">
      <span style={tabStyle}>{label}</span>
    </Box>
  );
};

Tag.defaultProps = {
  isVisible: false,
};

export default Tag;
