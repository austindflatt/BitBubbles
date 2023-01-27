import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AlertProvider } from './components/context/alert/AlertContext'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import NavBar from './components/NavBar/NavBar'
import CryptoPage from './components/Pages/CryptoPage'
import HomePage from './components/Pages/HomePage'
import NotFoundPage from './components/Pages/NotFoundPage'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222"
    },
    typography: {
      fontFamily: [
        'Arial',
        'Helvetica', 
        'sans-serif'
      ].join(',')},
    text: {
      primary: "#ffffff"
    },
  }
});

function App() {
  return (
    <>
    <AlertProvider />
    <Router>
      <ThemeProvider theme={darkTheme}>
      <NavBar />
      <CssBaseline />
      <Box m={2} pt={3}>
      {/* <AlertMessage /> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/price/:id' element={<CryptoPage />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </Box>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;