import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CryptoContext from './components/context/crypto/CryptoContext'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import NavBar from './components/NavBar/NavBar'
import CryptoPage from './components/Pages/CryptoPage'
import HomePage from './components/Pages/HomePage'
import AboutPage from './components/Pages/AboutPage'
import NotFoundPage from './components/Pages/NotFoundPage'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Footer from './components/Footer/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <CryptoContext>
    <Router>
      <ThemeProvider theme={darkTheme}>
      <NavBar />
      <CssBaseline />
      <Box m={2} pt={3}>
      <Container maxWidth="lg">
      {/* <AlertMessage /> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/price/:id' element={<CryptoPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </Container>
      </Box>
      <Footer />
      </ThemeProvider>
    </Router>
    </CryptoContext>
  );
}

export default App;