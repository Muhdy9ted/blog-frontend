import React, { useState } from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import { common } from '@mui/material/colors';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';

import { mainColor } from '../../theme/colors';
import classes from './navbar.module.scss';


const links = ['News', 'Music', 'Sport', 'Style'];

function Navbar(){

    const [slideSide, setSlideSide] = useState({left: false});
    const [slideSide2, setSlideSide2] = useState({top: false});


    const toggleSideMenu = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setSlideSide({left: open });
    };

    const toggleSideMenu2 = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setSlideSide2({top: open });
    };

    const SideMenu = (anchor='left') => (
        <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" onClick={toggleSideMenu(false)} onKeyDown={toggleSideMenu(false)}>
            <List>
                {links.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    const TopSearch = (anchor='top') => (
        <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'black', opacity: 0.6 }} role="presentation" onClick={toggleSideMenu2(false)} onKeyDown={toggleSideMenu2(false)}>
            <CloseIcon onClick={toggleSideMenu2(false)} fontSize='large' sx={{color: 'white', marginLeft: '75vw', fontSize: 80, mt:1}}/>
            <List>
                {links.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );


    return(

        <AppBar position="static" enableColorOnDark color='transparent'>
            <Container maxWidth="xl">

                <Toolbar disableGutters>
                    
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} className={classes.navLogo}>
                        e-chokenaija
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={toggleSideMenu(true)} color="inherit">
                            <MenuIcon sx={{color: mainColor[600]}}/>
                        </IconButton>

                        <Drawer anchor={'left'} open={slideSide.left} onClose={toggleSideMenu(false)}>
                            {SideMenu()}
                        </Drawer>

                    </Box>

                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className={classes.navLogo}>
                        e-chokenaija
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {links.map((link) => (
                            <Button key={link} onClick={toggleSideMenu(false)} sx={{ my: 2, color: 'white', display: 'block' }}>
                                {link}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        
                        <Tooltip title="Open settings">
                            <IconButton onClick={toggleSideMenu2(true)} sx={{ p: 0 }}>
                                <SearchIcon sx={{ color: common.black }}/>
                            </IconButton>
                        </Tooltip>

                        <Drawer anchor={'top'} open={slideSide2.top} onClose={toggleSideMenu2(false)}>
                            {TopSearch('top')}
                        </Drawer>
                    </Box>

                </Toolbar>

            </Container>
        </AppBar>
    );
}

export default Navbar;