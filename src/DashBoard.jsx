
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton, Switch, FormControlLabel, MenuItem, Menu, Button, Card, CardContent, CardActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

const DashBoard = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const bull = <span sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>•</span>;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Photos
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  className='e'
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={auth ? 'Logout' : 'Login'}
            />
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          open={drawerOpen}
          onClose={closeDrawer}
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {['Home', 'Category', 'Contact no'].map((text, index) => (
                <ListItem button key={index} onClick={closeDrawer}>
                  <ListItemIcon>
                    {text === 'Home' && <HomeIcon />}
                    <Link to="/category">{index === 1 && <InfoIcon />}</Link>
                    {index === 2 && <ContactMailIcon />}
                  </ListItemIcon>
                  {index === 1 && <Link to="/category"><ListItemText primary={text} /></Link>}
                  
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
      <table width="100px" height="200px">
      <tr>
      <td>
      <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluFuRGXHJIj-1I86QlMnaTInEhNQlP5HnnxSJjZbEIUHcvc1ZW5IYGkAv3IODGkMl914&usqp=CAU'/>
      </td>
<td>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Link to="/user" ><button>USER REGISTRATION</button></Link>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Link to ="/doctor"><button>DOCTER REGISTRATION</button></Link>
          </Typography>
         
          
          
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </td>
      </tr>
      </table>
    </div>
  );
};



export default DashBoard;



