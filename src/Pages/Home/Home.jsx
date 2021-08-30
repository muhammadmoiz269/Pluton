import React from "react";
import ImageSlider from "../../Components/Slickcarousel/ImageSlider";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import ParticleJs from "../../Components/Particles/ParticleJs";
import Heading from "../../Components/Heading/Heading";
import Cards from "../../Components/Cards/Cards";
import CardFlip from "../../Components/CardFlip/CardFlip";
import CollubusPro from "../../Components/CollubusPro/CollubusPro";
import LatestUpdates from "../../Components/LatestUpdates/LatestUpdates";
import PhoneIcon from '@material-ui/icons/Phone';
import Footer from "../../Components/Footer/Footer";
import MuiButton from "../../Components/MuiButton/MuiButton"
import BottomNav from "../../Components/BottomNav/BottomNav"
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineBlock } from "react-icons/ai";
import { AiFillSketchCircle } from "react-icons/ai";
import { AiFillThunderbolt} from "react-icons/ai";
import {  AiOutlineAppstore } from "react-icons/ai";
import MaterialNavbar from "../../Components/MaterialNavBar/MaterialNavbar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },

  height: {
    height: "90vh",
    backgroundColor: "#0F6198",
    // opacity: '1',
    // visibility: 'inherit',
    // width:'100%',
    // zIndex:'20',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Home = () => {
  const classes = useStyles();


  

  return (
    <div>
    

      <Grid container>
        
        <Grid item xs={12} className="image" style={{marginTop:"-100px"}}>
          <ParticleJs head="Empowering People To Create 
				An Honest World" para="" background="url(pluton\src\Images\minimal-glow-globe-dark-wallpaper.jpg)"/>
        </Grid>
      
        <Grid item xs={12} style={{ width: "100%" }}>
        <div className="card">
            <Heading head="Services" Headcolor="#0A2131" pb="4rem" />

            <Cards />
          </div>
          <Heading head="Technology" Headcolor="#0A2131" pb="4rem" />
          <ImageSlider/>
          <Heading pb="4rem"  />
          <CollubusPro heads="Happy Clients" box1Name="Collubus Pro" box2Name="We Got Leads" box3Name="Apply Up" box4Name="Numio" box5Name="Dafi" 
          box1Icon={<AiFillAppstore size="2em" color="#575FCF"/>} box2Icon={<AiOutlineBlock size="2em" color="#575FCF"/>}
          box3Icon={<AiFillSketchCircle size="2em" color="#575FCF"/>} box4Icon={<AiFillThunderbolt size="2em" color="#575FCF"/>}
          box5Icon={<AiOutlineAppstore size="2em" color="#575FCF"/>}
          />
          <Heading head="Latest Updates" Headcolor="#0A2131" pb="4rem" />
          <LatestUpdates/>
          <Heading head="Connect With Us" Headcolor="#0A2131" pb="2rem"/>
          <div style={{display:"grid" , justifyContent:"center", alignItems:"center" , paddingBottom:'3rem'}}>
         
      
          <Link to="/contact" style={{textDecoration:"none", color:"#ffff" }}>
       <MuiButton text="Contact" icon={<PhoneIcon/>} />
            
            </Link>


     
          </div>
      
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
