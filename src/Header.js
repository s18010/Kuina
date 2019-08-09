import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import theme from './theme';
import SearchField from './SearchField';

const useStyles = makeStyles(thm => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: thm.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" color="secondary" className={classes.title}>
              LUNCH MAP
            </Typography>
            <SearchField />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};
