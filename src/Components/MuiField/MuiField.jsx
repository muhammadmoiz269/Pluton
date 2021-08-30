import React from 'react';
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import SendIcon from '@material-ui/icons/Send';

const CssTextField = withStyles({
  root: {
    '& >*': {
        color: '#ffffffe2',
        
      },
    '& label.Mui-focused': {
      color: 'white',
      
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));



export default function MuiField({placeholder}) {
  const classes = useStyles();

  return (
      <div>
    <form className={classes.root} noValidate>
    
    <CssTextField
      className={classes.margin}
      label={placeholder}
      variant="outlined"
      id="custom-css-outlined-input"
    >

        </CssTextField>

      
        </form>
  
      </div>

  );
}
