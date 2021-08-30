import React from 'react'
import { Typography } from '@material-ui/core'
import { Divider } from '@material-ui/core';
import MuiButton from '../MuiButton/MuiButton';




const OurMission = ({Head,para,col}) => {
  
    return (
        <div style={{paddingBottom:"2rem"}}>
            <Typography variant="h3" style={{color:col}}>{Head}</Typography>
            <Divider style={{ width:"10%" , marginTop:"0.5rem", marginBottom:"0.5rem" ,height:"5px" , background:"#FF2147"}} />

            <Typography variant="subtitle1" style={{color:col}}>{para} </Typography>
            
        </div>
    )
}

export default OurMission
