import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MainContext } from '../context/MainContext';

const navStyles = {
    menu :{
        marginTop: 2,
        width: 90,
        color: "#8cedd3",
        backgroundColor: "#273E47",
        fontFamily: "Sono, sans-serif"
    },
    menuItem: {
        width: 120,
        backgroundColor: "273E47",
        textAlign: "center",
    }
}

const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const { setNode, currentNode } = useContext(MainContext);

    const nodes = ["About", "Resume", "Contact", "Games", "Projects", "Music"];

    const handleClick = (e) => {
        setIsOpen(!isOpen);
        setAnchorEl(e.currentTarget);
    }
    
    const handleClose = (e) => {
        const { node } = e.currentTarget.dataset;

        //console.log(node);

        setIsOpen(false);
        setAnchorEl(null);

        if(node === undefined){
            setNode(currentNode);
        } else {
            setNode(node.toLowerCase());
        }
  
    }

    const showMenuItems = () => {
        return nodes.map((node, i) => {
            return <MenuItem key={i} onClick={handleClose} data-node={node}>{node}</MenuItem>
        })
    }

    return (
        <div className="mobile-nav-container">
            <Button
                id="menu-button"
                sx={navStyles.menu}
                aria-controls={isOpen ? 'main-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="main-menu"
                sx={navStyles.menuItem}
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button'
                }}
            >
                {showMenuItems()}
            </Menu>
        </div>
    );
}

export default Nav;
