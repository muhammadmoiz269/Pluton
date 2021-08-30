import React,{useState,useEffect} from 'react'
import Grid from "@material-ui/core/Grid";
import "./About.css"
import Heading from '../../Components/Heading/Heading';
import OurMission from '../../Components/OurMission/OurMission';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MuiButton from "../../Components/MuiButton/MuiButton"
import CollubusPro from '../../Components/CollubusPro/CollubusPro';
import { Typography } from '@material-ui/core';
import Footer from '../../Components/Footer/Footer';

import { VscDebugStart } from "react-icons/vsc";
import ParticleJs from "../../Components/Particles/ParticleJs";
import { GoMegaphone } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import {  AiOutlineAppstore } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import SignUp from "../../Components/SignUp/SignUp"


const useStyles = makeStyles((theme) => ({
  
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const About = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration : 2000})
   
  },[])
  const [data, setdata] = useState([
    {
        id: 1,
        Head: "Future Perfect",
        para: "You’re investing more than money — it’s also energy, intelligence, brand, and the expanding potential of your business. Pluton translates this investment into a meaningful impact for you and your audience.",
  
          
      },
    {
      id: 2,
      Head: "The Tech that Advance the Industry",
      para: "Pluton helps create and lead some of the open-source web development technologies of the future. Progressive Web Apps, Ember.js, React.js, Elixir, and Ruby are some of the same technologies adopted by giants such as Google, IBM, and Microsoft, as well as by our clients such as Apple and Netflix. These proven, open-source technologies offer easy migration, long-term maintainability, and security, providing a solid foundation for digital products that inspire.",
      
    },
    
    {
      id: 3,
      Head: "Full Service, Full Stack",
      para: "Everything under one roof means less risk and a cohesive team to ensure forward momentum. From product strategy to product design to full-stack engineering, Pluton handles every aspect of digital product development so your insight and intelligence result in ample reward.",
    },
    {
      id: 4,
      Head: "Like (Atomic) Clockwork",
      para: "Using Agile processes, DockYard professionals unite to function as a synchronized unit with close client collaboration, so the flows in both directions. Pluton User Experience Developers (UXDs) are the keystone in our distinctive process — allowing us to close the gap between design and engineering in ways our competitors can’t.",
       
    },
  
  
  ]);
    return (
        <div>
        <Grid container>
        <Grid item xs={12} className="image1" style={{marginTop:"-100px"}}>
        <ParticleJs head="Empowering People To Believe in Team Work" para="Committed to people, committed to future"/>
        </Grid>
   
        <Grid container style={{paddingTop:'3rem'}}>

        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8} >
        <Heading head="WHY US" Headcolor="#0A2131" pb="2rem"></Heading>

        {
          
          data.map((elem) => (
            <div data-aos="fade-right">
            <OurMission  col="#0D1A2A" id={elem.id} Head={elem.Head} para={elem.para}  />


            </div>
            
          ))
        
        }

        </Grid>
        <Grid item xs={2}>
        </Grid>
        </Grid>

        <Grid container item lg={12} md={12} xs={12} className="section2" style={{height:'min-content'}}>
        <Grid  item lg={6} md={6} sm={12} xs={12} style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
         <div >
           <img  src={`${process.env.PUBLIC_URL}/images/about-us-1.png`} height="400px" width="400px" alt="" />
         </div>
        </Grid>
        <Grid  className="content" item lg={6} md={6} sm={12} xs={12} >
       
       <OurMission  col="#ffffffe6" Head="Grow Your Business" para="When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, "  />
       <div data-aos="zoom-in-left"  >
        <MuiButton text="Try it"   margin="0" width="200" col="#FF2147"/>


       </div>
        
        </Grid>
       
        </Grid>
        <Grid container item xs={12}   style={{padding:"3rem"}}>
        <Grid item lg={4} md={4} sm={12} style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        <Typography className="total" >480</Typography>
     
        </Grid>
        <Grid className="text" item lg={8} md={8} sm={12} style={{display:"flex",justifyContent:"center", alignItems:"start", flexFlow:"column",padding:"3rem"}}>
        
        
          
          <Typography className="ProjHead"  variant="h1">Project Launched</Typography>
          
          <Typography className="ProjPara" variant="h6">While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.</Typography>
          <div data-aos="zoom-in-left" style={{marginTop:"1rem"}}>
        <MuiButton text="Try it"  margin="0" width="200" col="#FF2147"/>


       </div>
        </Grid>
        
       
        </Grid>

        <CollubusPro heads="Our Values" box1Name="Digital Market" box2Name="24/7 Support" box3Name="Branding" box4Name="SEO" box5Name="Dafi" box1Icon={<GoMegaphone size="2em" color="#575FCF"/>}
        box2Icon={<BiSupport size="2em" color="#575FCF"/>}
        box3Icon={<GoMegaphone size="2em" color="#575FCF"/>}
        box4Icon={<GoSearch size="2em" color="#575FCF"/>}
        box5Icon={<AiOutlineAppstore size="2em" color="#575FCF"/>}

        />
      
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column", width:"100%", padding:"3rem"}}>
        <Heading head="07 Years Of Technical Assistance" Headcolor="#0A2131" pb="2rem" />

      <div >

      <button type="button" onClick={handleOpen} style={{border:"none", background:"#ffff"}}>
      <MuiButton text="Start a Project" icon={<VscDebugStart/>}  />

        
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <SignUp/>
          </div>
        </Fade>
      </Modal>
    </div>

        </div>      
      
      </Grid>
        </div>
    )
}
export default About;
