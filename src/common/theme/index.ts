import { createTheme, responsiveFontSizes, ThemeOptions } from '@material-ui/core/styles';

import palette from './colors';
import overrides from './overrides';
import props from './props';

const theme: ThemeOptions = {
  palette,
  overrides,
  props,
  spacing: 5,
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontSize: 15,
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
};

export default responsiveFontSizes(createTheme(theme));
