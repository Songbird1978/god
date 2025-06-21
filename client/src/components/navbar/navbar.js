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


const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    color: "#faebd7",
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
      <AppBar position="fixed" open={open} style={{ height: '10vh', className: "navBar", backgroundColor: "black", color: "transparent" }}>
        <Toolbar className="header" sx={{ backgroundColor: "black" }}>
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
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} style={{ Color: 'grey', justifyContent: "center" }}>
            {theme.direction === 'ltr' ? <CloseIcon className="icon" sx={{ marginTop: "20px" }} /> : <ChevronRightIcon className="icon" />}
          </IconButton>
        </DrawerHeader>
        <Logo onClick={() => {
          handleDrawerClose();  // Call the function
          window.location.replace("/#album");  // Perform the redirect
        }}
          style={{ fontSize: "10px", textDecoration: 'none', cursor: 'pointer' }}
          id="drawerLogo"></Logo>
        {/* this is where the menus start */}
        <List className='nav' style={{ backgroundColor: 'transparent', opacity: '80%', justifyContent: "center", color: "#faebd7" }}>
          <ListItem className="listItem">
            <div
              className="listItem"
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#about");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: "#faebd7" }}
            >
              ABOUT
            </div>

          </ListItem>
          <Divider />
          <ListItem className="listItem">
            <div
              className="listItem"
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#blogs");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: "#faebd7" }}
            >
              BLOGS
            </div>
          </ListItem>
          <Divider />
          <ListItem className="listItem">
            <div
              className="listItem"
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#tour");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: "#faebd7" }}
            >
              TOUR
            </div>
          </ListItem>
          <Divider />
          <ListItem className="listItem">
            <div
              className="listItem"
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#listen");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: "#faebd7" }}
            >
              LISTEN
            </div>
          </ListItem>
          <Divider />
          <ListItem>
            <Link
              className="listItem"
              to="https://garyodonnellthedimestoreheroes.bandcamp.com/album/three-ways-from-nowhere" target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: "#faebd7" }}
              onClick={handleDrawerClose}>STORE</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <div
              className="listItem"
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#contact");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: "#faebd7" }}
            >
              CONTACT
            </div>
          </ListItem>
          <Divider />
          <ListItem>
            <div
              className="listItem"
              onClick={() => {
                handleDrawerClose();  // Call the function
                window.location.replace("/#gallery");  // Perform the redirect
              }}
              style={{ textDecoration: 'none', cursor: 'pointer', color: "#faebd7" }}
            >
              GALLERY
            </div>
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


