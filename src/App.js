import React, { createContext, useState, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import routes from './routes';
import getDesignTokens from './theme';

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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />   
        {routes}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default withRouter(App);
