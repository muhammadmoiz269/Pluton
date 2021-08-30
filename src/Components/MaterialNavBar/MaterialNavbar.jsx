import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import img from "../../Images/logo.png"
import EmailIcon from '@material-ui/icons/Email';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';

import { SiGmail } from "react-icons/si";




const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0.2,
    // background:' transparent',
  },
  appbar: {
    background:'transparent',
    // borderBottom:'1px solid #3174B2'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    
    paddingLeft:'1rem',
    paddingRight:'1rem',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
 
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <IconButton color="primary">
        
        <KeyboardArrowRightIcon/>

    </IconButton>
        <p>Work</p>
      </MenuItem>
      <MenuItem>
      <IconButton color="primary">
        
        <KeyboardArrowRightIcon/>

    </IconButton>
        <p>About</p>
      </MenuItem>
      <MenuItem>
      <IconButton color="primary">
        
        <KeyboardArrowRightIcon/>

    </IconButton>
        <p>Work</p>
      </MenuItem>
      <MenuItem>
      <IconButton color="primary">
        
        <KeyboardArrowRightIcon/>

    </IconButton>
        <p>Services</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="primary">
        
            <KeyboardArrowRightIcon/>
  
        </IconButton>
        <p>Contact</p>
      </MenuItem>
    
    </Menu>
  );
    var [isnavbarVisible,setnavbarVisibility]=useState(false)
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>

        <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
         
    
   
          </IconButton> */}
          <img src={img} height="30px" width="120px" alt="" />
          </div>
          
       
    
        

          

         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

  
       
            

          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

           

          <Typography className={classes.title}>
          <span >
           
            <Link to="/" style={{textDecoration:"none", color:"#ffff" }}>Home</Link>
            </span>
          </Typography>
          <Typography className={classes.title}>
          
          
          <span >
           
            <Link to="/about" style={{textDecoration:"none", color:"#ffff" }}>About</Link>
            </span>

          
         
          
         

          </Typography>
          <Typography className={classes.title}>
            <span>
              
            <Link to="/work" style={{textDecoration:"none", color:"#ffff" }}>Work</Link>

            </span>
          </Typography >
          <Typography className={classes.title}>
            <span>
            <Link to="/services" style={{textDecoration:"none", color:"#ffff" }}>Services</Link>

            </span>
          </Typography>
          <Typography className={classes.title}>
            <span>
            <Link to="/contact" style={{textDecoration:"none", color:"#ffff" }}>Contact</Link>

            </span>
          </Typography>
            

          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

           

      <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Link to="/contact" style={{textDecoration:"none", color:"#ffff" }}>
            <SiGmail />


            </Link>

         
    
   
          </IconButton>
         
            

          </div>
       

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}