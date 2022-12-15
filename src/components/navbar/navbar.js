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
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TextField from '@mui/material/TextField';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

//theming light and dark mode 
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../App';

import { mainColor } from '../../theme/colors';
import classes from './navbar.module.scss';


const links = ['News', 'Music', 'Sport', 'Style', 'Login'];

function Navbar(){
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [slideSide, setSlideSide] = useState({left: false});
    const [slideSide2, setSlideSide2] = useState({top: false});

    const socials = [<FacebookIcon />, <TwitterIcon />, <PinterestIcon />, <InstagramIcon />, <YouTubeIcon />]


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
        <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw', minHeight: '100vh', overflow: 'hidden' }} role="presentation" onClick={toggleSideMenu(false)} onKeyDown={toggleSideMenu(false)} className={classes.sideMenu}> 
            
            <div className={classes.header}>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className={classes.navLogo}>
                    e-chokenaija
                </Typography>
                <CloseIcon onClick={toggleSideMenu(false)} color='primary' sx={{ fontSize: 40, mr: 2}}/>
            </div>
            
            <List className={classes.list}>
                {links.map((text) => (
                    <div key={text}>
                        <ListItem button>
                            <ListItemText primary={text}  className={classes.listItem}/>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>

            <div className={classes.footer}>
                <Typography variant="h6" noWrap component="div" className={classes.title}>
                    connect with us
                </Typography>

                <List className={classes.socials}>
                    {socials.map((social, i) => (
                        <ListItem button key={i} className={classes.listItem}>
                            <ListItemIcon className={classes.icons}>
                                {social}
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Box>
    );

    const TopSearch = (anchor='top') => (
        <Box role="presentation" className={classes.topSearch}>
            <CloseIcon onClick={toggleSideMenu2(false)} fontSize='large' className={classes.closeIcon} />
            <Box component="form" noValidate autoComplete="off" className={classes.form}>
                <TextField id="standard-basic" label="Search" variant="standard" color='primary' className={classes.inputField} />
            </Box>
        </Box>
    );


    return(

        <AppBar position="static" enableColorOnDark color='transparent' className={classes.appBar}>
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

                    <Box sx={{ flexGrow: 0 }}>
                        {/* {theme.palette.mode} mode */}
                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    );
}

export default Navbar;