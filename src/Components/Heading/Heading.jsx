import { Typography } from '@material-ui/core'
import React from 'react'
import { Divider } from '@material-ui/core';
import "./Heading.css"
const Heading = ({head,para,Headcolor,pb}) => {
    return (
        <div>
            <Typography style={{padding:pb}}>
            <Typography className="Head" variant="h2" component="h2" align='center' style={{color:Headcolor}}>{head}</Typography>
            <Typography variant="h6" style={{color:Headcolor, wordSpacing:'10px'}}>{para}</Typography>
            <Divider style={{ width:"15%" , margin:"auto", marginTop:"1rem"}} />

            </Typography>
         
            
        </div>
    )
}

export default Heading
