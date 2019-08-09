import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  root: {
    paddingTop: 110,
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
          .filter((restaurant, index) => index < 30)
          .map(restaurant => {
            return (
              <GridListTile key={restaurant.id} cols={3}>
                <img src={restaurant.image_url} alt={restaurant.name} />
                <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
                  <GridListTileBar
                    title={restaurant.name}
                    titlePosition="top"
                    actionPosition="left"
                    className={classes.titleBar}
                  />
                </a>
              </GridListTile>
            );
          })}
      </GridList>
    </div>
  );
};
