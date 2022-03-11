import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CryptoPage from './components/Pages/CryptoPage';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function App() {
  return (
    <Router>
      <NavBar />
      <CssBaseline />
      <Box m={2} pt={3}>
      <Container maxWidth="xl">
      {/* <AlertMessage /> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/coins/:id' element={<CryptoPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/404' element={null} />
          <Route path='/*' element={null} />
        </Routes>
      </Container>
      </Box>
    </Router>
  );
}

export default App;