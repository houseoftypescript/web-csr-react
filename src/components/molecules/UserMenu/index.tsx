import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const UserMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton onClick={handleClick} sx={{ padding: 0 }}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/user/profile">Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/user/settings">Settings</Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
