import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import PhoneIcon from '@material-ui/icons/Phone';
import WorkIcon from '@material-ui/icons/Work';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    paddingLeft:"1.5rem"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  root: {
    background: "#061724",
   color: "#ffff",
   display: "flex",
   justifyContent:"center",
   paddingBottom:"2rem"
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
       Home 
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
       
        className={classes.link}
      >
        <PhoneIcon className={classes.icon} />
        Contact 
      </Link>
      <Link color="inherit" href="/"  className={classes.link}>
        <EmojiObjectsIcon className={classes.icon} />
       Solution 
      </Link>
      <Link color="inherit" href="/"  className={classes.link}>
        <WorkIcon className={classes.icon} />
       Careers 
      </Link>
    
    </Breadcrumbs>
  );
}
