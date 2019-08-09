import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
    padding: 10
  },
}));

export default () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField 
        className={classes.textField}
        id="searchField"
        placeholder="ステーキ　ランチ"
        autoFocus={true}
        fullWidth
        margin="dense"
        variant="filled"
        InputLabelProps={{
        shrink: true,
        }}
      />
    </form>
  );
}
