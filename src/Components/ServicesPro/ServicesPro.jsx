import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "../../Components/Box/Box"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { GoMegaphone } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import {  AiOutlineAppstore } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import ServiceBox from "../ServiceBox/ServiceBox";
import ServiceBox1 from "../ServiceBox/ServiceBox1";
import "./ServicesPro.css"



const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const ServicesPro = () => {
    const classes = useStyles();

  const [data1, setdata1] = useState([
    {
      id: 1,
      name:"Website Development",
      image:`${process.env.PUBLIC_URL}/images/Web.svg`,
      
     
    },
    {
        id: 2,
        name:"Mobile Development",
        image:`${process.env.PUBLIC_URL}/images/mobileApp.svg`,
      
    
       
       
    },

    {
        id: 3,
        name:"Ui/Ux and Branding",
        image:`${process.env.PUBLIC_URL}/images/UiUx.svg`,
    
       
    },
    {
        id: 4,
        name:"Cyber Security",
        image:`${process.env.PUBLIC_URL}/images/cyberSecurity.svg`,
      
    
    },
   
  ]);
  const [data2, setdata2] = useState([
    {
      id: 1,
      name:"Cloud Solutions",
      image:`${process.env.PUBLIC_URL}/images/Cloud.svg`,
      
     
    },
    {
        id: 2,
        name:"Extended Team",
        image:`${process.env.PUBLIC_URL}/images/ExtendedTeam.svg`,
      
    
       
       
    },

    {
        id: 3,
        name:"Start Co-Create",
        image:`${process.env.PUBLIC_URL}/images/StartUp.svg`,
    
       
    },
    {
        id: 4,
        name:"Custom Integration",
        image:`${process.env.PUBLIC_URL}/images/Custom.svg`,
      
    
    },
   
  ]);
  const [data3, setdata3] = useState([
    {
      id: 1,
      name:"Digital Products & Engineering",
      image:`${process.env.PUBLIC_URL}/images/digital.svg`,
      para:"Our expertise is building, connecting, and scaling digital products. We advise, manage, architect, and develop, using agile methods to ensure on-time delivery."
      
     
    },
    
   
  ]);
  return (
    <div className={classes.root} style={{padding:"5rem 0rem", background:"#0C0F33"}}>
     <div  className="OuterContainer" >
       
     
    <Grid container  style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      
      <Grid item lg={6} md={12}>
      {
          
          data3.map((elem) => (
            <ServiceBox1   name={elem.name}  image={elem.image} para={elem.para} />
            
          ))
        
        }
     

      
      </Grid>
      <Grid item lg={6}  md={12} className={classes.MuiGridCont}
          container
        
          >
          {
          
          data1.map((elem) => (
            <ServiceBox   name={elem.name}  image={elem.image}  />
            
          ))
        
        }
        </Grid>
      
    </Grid>
    <Grid item lg={12}  
          container
          
          >
          {
          
          data2.map((elem) => (
            <ServiceBox   name={elem.name}  image={elem.image}  />
            
          ))
        
        }
        </Grid>
        </div> 
  </div>
  
   
     
  );
};

export default ServicesPro;
