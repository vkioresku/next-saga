import { Grid, useMediaQuery, useTheme } from '@material-ui/core';

import { GridContainerProps } from './GridContainer';

export const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={matches ? 2 : 6}>
      {children}
    </Grid>
  );
};
