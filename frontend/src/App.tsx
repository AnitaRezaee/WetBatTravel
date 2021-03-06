import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import { QuickQuote } from './components/quickQoute';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5F6CAF'
    },
    secondary: {
      main: '#5BBFBA'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <QuickQuote/>
      </div>
    </ThemeProvider>
  );
}

export default App;
