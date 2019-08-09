import React from 'react';
import { Container } from 'next/app';
import Slider from '@material-ui/core/Slider';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

const marks = [
  {
    value: 1000,
    label: '1000円',
  },
  {
    value: 2000,
    label: '2000円',
  },
  {
    value: 3000,
    label: '3000円',
  },
  {
    value: 4000,
    label: '4000円',
  },
  {
    value: 5000,
    label: '5000円',
  },
];
const valuetext = value => `${value}円`;

export default () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Slider
          defaultValue={1000}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={5}
          marks={marks}
          min={1000}
          max={5000}
          width={500}
        />
      </ThemeProvider>
    </Container>
  );
};
