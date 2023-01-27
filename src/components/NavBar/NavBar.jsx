import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['About'];
const settings = ['Watchlist', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{  backgroundColor: '#444', boxShadow: '0 2px 8px rgb(0 0 0 / 20%)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            component={Link}
            to={'/'}
            style={{ fontSize: '2em', fontWeight: '600', color: '#FFF', cursor: 'pointer', textDecoration: 'none' }}
          >
            Bit Bubbles
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={'/'}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            style={{ fontWeight: 'bold', color: '#FFF', cursor: 'pointer', textDecoration: 'none' }}
          >
            Bit Bubbles
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar