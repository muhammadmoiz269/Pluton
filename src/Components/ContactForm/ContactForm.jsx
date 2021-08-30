import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import emailjs from 'emailjs-com';
import SnackBar from '../SnackBar/SnackBar'


import { HiLocationMarker } from "react-icons/hi";

import { FaPhoneAlt } from "react-icons/fa";

import { RiMessage3Fill } from "react-icons/ri";

import { BiMessage } from "react-icons/bi";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
       Pluton
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "85%",
    width: "80%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#39487A",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
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

export default function ContactForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  


  return (
    <div
      className={classes.root}
      style={{ marginTop: "2rem", marginBottom: "2rem" }}
    >
      <Grid container>
        <Grid item lg={8} md ={8} sm={12} style={{ backgroundColor: "#FFFFFF" }}>
          <Container component="main" maxWidth="sm">
            {/* <CssBaseline /> */}
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <BiMessage />
              </Avatar>
              <Typography component="h1" variant="h5">
                Send Us a Message

              </Typography>
              <form className={classes.form} noValidate onSubmit={sendEmail}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="name"
                      // variant="outlined"
                      required
                      fullWidth
                      id="Name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      // variant="outlined"
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
                      // variant="outlined"
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
                      rows={4}
                      required
                      fullWidth
                      name="message"
                      label="Message"
                      type="message"
                      id="message"
                    />
                  </Grid>
                </Grid>
                <Button
                onClick={handleClick}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ background: "#061724" }}
                >
                  Send Message
                </Button>
                <SnackBar a={open} />

              </form>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          style={{
            background: "#061724",
            paddingLeft: "2rem",
            paddingTop: "2rem",
          }}
        >
          <Typography
         
            component="h1"
            variant="h5"
            style={{ color: "#ffff" , padding:"1.5rem 0rem"}}
          >
            Contact Information
          </Typography>

          <Typography
            
            variant="subtitle1"
            style={{ color: "#F2F5F9" , padding:"0.5rem 0rem"}}
          >
           An ecosystem of individuals and startups working together.
          </Typography>

          <Typography
            gutterBottom="true"
            variant="subtitle1"
            style={{ color: "#F2F5F9" , padding:"0.5rem 0rem" }}
          >
         
            <span style={{paddingRight:"1rem", color:"#ffff"}}>
         
            < HiLocationMarker/>


            </span>
            Suite # 501 5th floor MA Arcade.
          </Typography>

          <Typography
            gutterBottom="true"
            variant="subtitle1"
            style={{ color: "#F2F5F9" , padding:"0.5rem 0rem" }}
          >

            <span style={{paddingRight:"1rem", color:"#ffff"}}>
         
            <FaPhoneAlt />


            </span>
            
            +1 (291) 939 2398
          </Typography>
          <Typography
            gutterBottom="true"
            variant="subtitle1"
            style={{ color: "#F2F5F9" }}
          >
            <span style={{paddingRight:"1rem", color:"#ffff"}}>
            <RiMessage3Fill />


            </span>
            info@plutonltd.com
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
