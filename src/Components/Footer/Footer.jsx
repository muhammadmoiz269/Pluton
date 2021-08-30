import React from "react";
import Heading from "../Heading/Heading";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "../Box/Box";
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineBlock } from "react-icons/ai";
import { AiFillSketchCircle } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { Divider } from "@material-ui/core";
import { CircularProgress, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import MuiField from "../MuiField/MuiField";
import Send from "@material-ui/icons/Send";
import MuiButton from "../MuiButton/MuiButton";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import BottomNav from "../BottomNav/BottomNav"
import "./Footer.css"

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: 160,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
  },
  root: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
    height: "min-content",
    background: "#061724",
    height: "min-content",
    display: "flex",
    alignItems:"center"
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
   
       <div className={classes.root}>
         <Grid container >
        
       
       
        <Grid item xs={12} sm={6} md={3} lg={3}  style={{paddingLeft:"4rem"}}>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} width="150px" />
        <Typography style={{color:"#ffffffc3", paddingTop:"1rem"}}>An ecosystem of individuals and startups working together to create a world that is honest and transparent.</Typography>
       
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} style={{paddingLeft:"4rem"}}>
        <Typography variant="h5" style={{color:"#ffffffe2", letterSpacing:"2px"}}>PRODUCTS</Typography>
        <Typography style={{color:"#ffffffc3", paddingTop:"1rem"}}>Collubus Pro.</Typography>
        <Typography style={{color:"#ffffffc3"}}>Dafi.</Typography>

        <Typography style={{color:"#ffffffc3"}}>Got Leads.</Typography>
        <Typography style={{color:"#ffffffc3"}}>Numio.</Typography>

        <Typography style={{color:"#ffffffc3"}}>Apply Up.</Typography>


          
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className="subscription">
        <Typography variant="h5" style={{color:"#ffffffe2", letterSpacing:"2px"}}>SOLUTIONS</Typography>
        <Typography style={{color:"#ffffffc3", paddingTop:"1rem"}}>Decentralized Finance</Typography>
        <Typography style={{color:"#ffffffc3"}}>Token Development</Typography>
        <Typography style={{color:"#ffffffc3"}}>Digital Sovereign Identity</Typography>
        <Typography style={{color:"#ffffffc3"}}>Layer 2 Solutions</Typography>
      

        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className="subscription">
        <Typography variant="h5" style={{color:"#ffffffe2", letterSpacing:"2px"}}>SUBSCRIPTION</Typography>
        <MuiField  placeholder="Enter your email" />
        <MuiButton text="Send" icon={<Send/>} margin="5" width="67"/>
        
        <Typography style={{color:"#ffff" , paddingTop:"4rem", fontSize:"1.5rem"} }>

        <LinkedInIcon style={{ paddingLeft:"1rem"}} className="myIcons" />
        <FacebookIcon style={{ paddingLeft:"1rem"}} className="myIcons"/>
        <InstagramIcon style={{ paddingLeft:"1rem"}} className="myIcons"/>
        <TwitterIcon style={{ paddingLeft:"1rem"}} className="myIcons"/>

        </Typography>
      
        </Grid>
        
      

       
      </Grid>
     
         
    </div>
     

   
  );
};

export default Footer;
