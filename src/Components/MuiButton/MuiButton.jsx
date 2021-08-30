import React from 'react'
import Button from '@material-ui/core/Button';


const MuiButton = ({text,icon,margin,width,col}) => {
    return (
        <div>
        <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon= {icon}
        style={{marginLeft:`${margin}px`, width:`${width}%`, background:`${col}`, color:"#ffff"}}
      >
        {text}
      </Button>
            
        </div>
    )
}

export default MuiButton
