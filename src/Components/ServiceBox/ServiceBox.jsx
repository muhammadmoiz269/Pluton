import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
// import "../ServiceBox/ServiceBox.css"

const useStyles = makeStyles((theme) => ({
    root: {
      // display: 'flex',
      // justifyContent:"center",
      // alignItems:"center",
      // flexWrap: 'wrap',
      
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
        
      },
    },
  }));

  
const ServiceBox = ({name,image}) => {
    const classes = useStyles();
    return (
      

      
        <div className={classes.root} style={{textAlign:"center"}}>
        <Paper  className="Boxi" style={{ backgroundColor:"#232549" ,borderRadius:"25px", marginTop:"1rem", marginRight:"0.5rem", padding:"2rem 0" , width:"240px" ,height:"160px"}}>
        <img src={image} height="110px" alt="" />
        <Typography  variant="h5"  style={{fontWeight:"bold", color:"#ffff", padding:"0 3rem"}} >{name}</Typography>
    
        </Paper>
      

       
      </div>
      
    )
}

export default ServiceBox

