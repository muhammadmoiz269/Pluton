import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

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

  
const ServiceBox1 = ({name,image,para}) => {
    const classes = useStyles();
    return (
      

      
        <div className={classes.root} style={{textAlign:"center"}}>
        <Paper   style={{ background: "linear-gradient(15deg, rgba(12,16,51,1) 0%, rgba(40,36,213,0.7539390756302521) 100%)" ,borderRadius:"25px", marginTop:"1rem", marginRight:"0.5rem", padding:"2rem 0" , width:"97%" ,height:"410px"}}>
        <img src={image} height="110px" alt="" />
        <Typography  variant="h4"  style={{fontWeight:"bold", color:"#ffff", padding:"0 3rem"}} >{name}</Typography>
        <Typography  variant="h6"  style={{ color:"#ffff", padding:"2rem 3rem"}} >{para}</Typography>
    
        </Paper>
      

       
      </div>
      
    )
}

export default ServiceBox1

