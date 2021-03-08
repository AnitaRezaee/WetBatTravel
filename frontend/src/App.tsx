import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import './App.css';
import { QuickQuote } from './components/quickQoute';
import { PendingQuote } from './components/pendingQuote';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5F6CAF',
    },
    secondary: {
      main: '#5BBFBA',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  quoteCards: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.quoteCards}>
        <QuickQuote />
        <PendingQuote />
      </div>
    </ThemeProvider>
  );
}

export default App;
