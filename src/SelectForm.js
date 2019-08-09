import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="area">エリア</InputLabel>
        <Select
          value={values.area}
          onChange={handleChange}
          inputProps={{
            name: 'area',
          }}
        >
          <MenuItem value="沖縄県那覇市">
            <em>沖縄</em>
          </MenuItem>
          <MenuItem value="東京都渋谷区">東京</MenuItem>
          <MenuItem value="宮城県仙台市">仙台</MenuItem>
          <MenuItem value="大阪府大阪市">大阪</MenuItem>
        </Select>
      </FormControl>
  );
}
