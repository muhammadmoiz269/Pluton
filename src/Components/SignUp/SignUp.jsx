import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { RiContactsFill } from "react-icons/ri";
import "./SignUp.css"
import emailjs from 'emailjs-com';


// import emailjs from "emailjs"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {/* {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} */}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_rneo705', 'template_c3jycxx', e.target, 'user_xvVxw4hwViaMWkWWLoZ1p')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    

}

export default function SignUp() {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs" className="rootElem" >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <RiContactsFill />
        </Avatar>
        <Typography component="h1" variant="h5">
        Let's start a project together
        </Typography>
        
        <form className={classes.form} noValidate  onSubmit={sendEmail}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Phone"
                label="Phone"
                name="phone"
                autoComplete="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          id="Comment"
          name="message"
          autoComplete="Comment"

         
          variant="outlined"
          fullWidth
        />
            </Grid>
           
          </Grid>
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          
        </form>
      </div>
    
    </Container>
  );
}
