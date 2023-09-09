import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../styles/Navbar.scss';

const pages = ['Profile', 'About Us', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogin = () => {
    // Implement your login logic here, e.g., setting the isLoggedIn state to true.
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here, e.g., setting the isLoggedIn state to false.
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'grey' }}>
      <Container maxWidth="xl">
        <Toolbar className="navbarbox" disableGutters>

          <Box className="navbarbox" sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* Use Link for menu items */}
                  <Link to={`/${page.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            {/* Use Link for the logo */}
            <img
              src="images/logo_transparent.png"
              alt="Logo"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginRight: '2px',
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                maxWidth: '100px',
              }}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link} // Use Link component for menu items
                to={`/${page.toLowerCase().replace(' ', '-')}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? ( // Render logout button when logged in
              <Tooltip title="Logout">
                <IconButton onClick={handleLogout} sx={{ p: 0, marginRight: 4.5, width: 25, height: 25 }}>
                  <Avatar alt="User Avatar" src="images/poncedeleon.jpg" />
                </IconButton>
              </Tooltip>
            ) : ( // Render login button when not logged in
              <Button color="inherit" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
