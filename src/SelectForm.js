import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    area: '沖縄',
    name: 'okinawa',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="area">エリア</InputLabel>
        <Select
          value={values.area}
          onChange={handleChange}
          inputProps={{
            name: 'area',
            id: 'area',
          }}
        >
          <MenuItem value="沖縄">
            <em>沖縄</em>
          </MenuItem>
          <MenuItem value={10}>東京</MenuItem>
          <MenuItem value={20}>仙台</MenuItem>
          <MenuItem value={30}>大阪</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
