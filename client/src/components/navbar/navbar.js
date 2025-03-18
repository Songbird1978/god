import React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../logo/logo';
import NavOptions from '../navbar/navOptions.js';


const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'top',
  justifyContent: 'flex-end',
}));

function Navbar() {

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);

  };



  return (
    <Box sx={{ display: 'flex', backgroundColor: 'black', marginTop: '0', height: '0vh' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ height: '0vh', className: "navBar", backgroundColor: "black", color: "transparent" }}>
        <Toolbar className="header" sx={{ backgroundColor: "black", opacity: "100%" }}>
          <IconButton
            color="transparent"
            hover="none"
            className="burger"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            size="large"
            position="left"
            sx={{ ml: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon className="burger" />
          </IconButton>
          <div className="logoDiv">
            <NavOptions open={open} />
          </div>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: 'black',
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ Color: 'grey' }}>
            {theme.direction === 'ltr' ? <CloseIcon className="icon" sx={{ marginTop: "20px" }} /> : <ChevronRightIcon className="icon" />}
          </IconButton>
        </DrawerHeader>
        <Logo onClick={() => {
          handleDrawerClose();  // Call the function
          window.location.replace("/#album");  // Perform the redirect
        }}
          style={{ fontSize: "10px", textDecoration: 'none', cursor: 'pointer', color: 'white' }}
          id="drawerLogo"></Logo>
        {/* this is where the menus start */}
        <List className='nav' style={{ backgroundColor: 'transparent', opacity: '80%' }}>
          <ListItem>
            <div
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#about");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}
            >
              ABOUT
            </div>

          </ListItem>
          <Divider />
          <ListItem>
            <div
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#blogs");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}
            >
              BLOGS
            </div>
          </ListItem>
          <Divider />
          <ListItem>
            <div
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#listen");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}
            >
              LISTEN
            </div>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to="https://www.ebay.co.uk/itm/335571305995" style={{ textDecoration: 'none', color: 'white' }} onClick={handleDrawerClose}>STORE</Link>
          </ListItem>
          <Divider />

        </List>
        {/* above is where the menus end */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box >
  );
}

export default Navbar;


