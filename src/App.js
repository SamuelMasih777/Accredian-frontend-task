import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import MainPage from './page/MainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <Header />
      <MainPage/>      
    </ThemeProvider>
  );
}

export default App;