import React,{useEffect} from 'react'
import MuiButton from "../../Components/MuiButton/MuiButton"
import OurMission from '../../Components/OurMission/OurMission';
import { Typography } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Heading from '../../Components/Heading/Heading';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutSection = ({Head,para,img,dir,anim}) => {
    useEffect(() => {
        AOS.init({ duration : 2000})
       
      },[])
    
    return (
        <div>
            
        <Grid container lg={12}   style={{padding:"3rem"}} direction={dir}>

        <Grid item lg={6} md={6} sm={12} style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        <div data-aos={anim}>
        <img  src={img} height="400px" width="400px" alt="" />


        </div>
       
     
        </Grid>


        <Grid className="text" item lg={6} md={6} sm={12} style={{display:"flex",justifyContent:"center", alignItems:"start", flexFlow:"column",padding:"3rem"}}>
        
        
          
          <Typography  variant="h2" gutterBottom="true" style={{color:"#0D1A2A"}} >{Head}</Typography>
          
          <Typography  variant="h6"  >{para}</Typography>
          <div  style={{marginTop:"1rem"}}>
        <MuiButton text="Check Out"  margin="0" width="150" col="#575FCF"/>


       </div>
        </Grid>
        
       
        </Grid>
            
        </div>
    )
}

export default AboutSection
