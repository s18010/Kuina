import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '90%',
  },
}));

export default props => {
  const classes = useStyles();
  const { restaurants } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight="auto" className={classes.gridList} cols={12} spacing={20}>
        {restaurants
          .filter((restaurant, index) => index < 20)
          .map(restaurant => {
            return (
              <GridListTile key={restaurant.id} cols={3}>
                <img src={restaurant.image_url} alt={restaurant.name} />
              </GridListTile>
            );
          })}
      </GridList>
    </div>
  );
};
