import React,{useState} from 'react'
import Grid from "@material-ui/core/Grid";
import ParticleJs from "../../Components/Particles/ParticleJs";
import "./Work.css"
import Heading from '../../Components/Heading/Heading';
import AboutSection from "../../Components/AboutSection/AboutSection"
import ImageSlider from "../../Components/Slickcarousel/ImageSlider";
import MuiButton from "../../Components/MuiButton/MuiButton"
import PhoneIcon from '@material-ui/icons/Phone';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";








const Work = () => {
    const [data, setdata] = useState([
        {
            id: 1,
            Head: "Collubus Pro",
            para: "Collubus Pro is a Finland-based clothing brand. The foundation of which is formed by fusing uniquely designed clothes with technology",
            img:`${process.env.PUBLIC_URL}/images/Collobus-pro.png`,
            dir:"row",
            anim:"fade-right",

              
          },
        {
          id: 2,
          Head: "We Got Leads",
            para: "We Got Leads is a Finland-based clothing brand. The foundation of which is formed by fusing uniquely designed clothes with technology",
            img:`${process.env.PUBLIC_URL}/images/We-Got-Leads.png`,
            dir:"row-reverse",
            anim:"fade-left",

          
        },
        
        {
          id: 3,
          Head: "Apply Up",
          para: "Apply Up is a Finland-based clothing brand. The foundation of which is formed by fusing uniquely designed clothes with technology",
          img:`${process.env.PUBLIC_URL}/images/apply-up.png`,
          dir:"row",
          anim:"fade-right",


            
        },
      
      
      
      ]);
    return (
        <div>
            <Grid container>
        <Grid item xs={12} className="work" style={{marginTop:"-100px"}}>
        <ParticleJs head="Empowering People To Deliver The Best Product" para="Committed to people, committed to future"/>
        </Grid>
      

      <Grid item xs={12}>
        <Heading head="Our Work" Headcolor="#0A2131" pb="2rem"></Heading>

          {
               data.map((elem) => (
                <div>
                <AboutSection  id={elem.id} Head={elem.Head} para={elem.para} img={elem.img} dir={elem.dir} anim={elem.anim}  />
    
    
                </div>
               ))
          }

      </Grid>
      <Grid item xs={12} style={{ width: "100%" }}>

      <Heading head="Client & Partners" Headcolor="#0A2131" pb="4rem" />
      <ImageSlider/>


      </Grid>
      <Grid item xs={12}>
      <Heading head="Connect With Us" Headcolor="#0A2131" pb="4rem"/>
        <div style={{display:"grid" , justifyContent:"center", alignItems:"center" , paddingBottom:'3rem'}}>
         
      
        <Link to="/contact" style={{textDecoration:"none", color:"#ffff" }}>
       <MuiButton text="Contact" icon={<PhoneIcon/>} />
            
            </Link>

          </div>
      </Grid>
      </Grid>
       
        </div>
    )
}

export default Work
