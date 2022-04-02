import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { saveCurrentPage, logOut } from '../actions';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const pages = [
    {path: '/', pageName: 'Login'}, 
    {path: '/registration', pageName: 'Registration'}, 
    {path: '/change_pass', pageName: 'Change Password'}
  ]

  const currentPage = useSelector((state) => state.currentPage);
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    if(event.currentTarget.value !== undefined) {
      dispatch(saveCurrentPage(pages[event.currentTarget.value].pageName))
      navigate(pages[event.currentTarget.value].path)
    }
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
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
                {auth ? <MenuItem onClick={handleClose} value={2}>Change Password</MenuItem>
                : 
                <MenuItem onClick={handleClose} value={0}>Login</MenuItem>}
                {auth ? <MenuItem onClick={handleLogOut} value={0}>LogOut</MenuItem> 
                : <MenuItem onClick={handleClose} value={1}>Registration</MenuItem>}
              </Menu>
            </div>
          <Typography variant="h6" component="div">
            {currentPage}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}