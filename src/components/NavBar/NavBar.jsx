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
    <>
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
    <div className="bubble-chart-header">
      <div className="configuration-tabs scroll-container">
        <button className="tab selected" draggable="true">Week</button>
        <button className="tab" draggable="true">Market Cap + Week</button>
      </div>
      <button className="icon-button border" title="Edit chart">
        <svg width="24" height="24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
        </button>
        <button className="icon-button border" title="Add chart">
          <svg width="24" height="24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
    </div>
    </>
  );
};

export default NavBar