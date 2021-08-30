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

  
const Box = ({logo,name,amount,color}) => {
    const classes = useStyles();
    return (
      

      
        <div className={classes.root} style={{textAlign:"center"}}>
        <Paper elevation={3}  style={{ backgroundColor:{color} ,borderRadius:"10px", paddingTop:"2rem" , width:"240px" ,height:"140px"}}>
        {logo}
        <Typography variant="h5"   style={{fontWeight:500}} >{name}</Typography>
        <Typography variant="h6" style={{fontWeight:"light"}}>{amount}</Typography>
        </Paper>
      

       
      </div>
      
    )
}

export default Box
