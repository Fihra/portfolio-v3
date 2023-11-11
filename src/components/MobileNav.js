import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MainContext } from '../context/MainContext';

const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const nodes = ["About", "Resume", "Contact", "Games", "Projects", "Music"];

    const handleClick = (e) => {
        setIsOpen(!isOpen);
        setAnchorEl(e.currentTarget);
    }
    
    const handleClose = () => {
        setIsOpen(false);
        setAnchorEl(null);
    }

    return (
        <div className="mobile-nav-container">
            <Button
                id="basic-button"
                aria-controls={isOpen ? 'main-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="main-menu"
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Resume</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
                <MenuItem onClick={handleClose}>Games</MenuItem>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
                <MenuItem onClick={handleClose}>Music</MenuItem>

            </Menu>
        </div>
    );
}

export default Nav;
