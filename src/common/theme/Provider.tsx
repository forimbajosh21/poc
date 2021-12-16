import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Global from './Global';
import theme from '.';

const ThemeProvider: React.FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Global />

    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
