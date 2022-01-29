import React, { createContext, useState, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { ErrorBoundary } from 'react-error-boundary';

import routes from './routes';
import getDesignTokens from './theme';
import Fallback from './webpages/fallback';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const errorHandler = (error, errorInfo) => {
    console.log('logging', error, errorInfo);
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary fallback={Fallback} onError={errorHandler}>
          {routes}
        </ErrorBoundary> 
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default withRouter(App);
