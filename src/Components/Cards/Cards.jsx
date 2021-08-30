import React,{useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from "@material-ui/icons/Update";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from 'react-card-flip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardFlip from '../../Components/CardFlip/CardFlip'





const useStyles = makeStyles((theme) => ({
    
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    media: {
      height: 160,
      backgroundSize: "cover",
      backgroundPositionX: "center",
      backgroundPositionY: "center",
    },
    root: {
    paddingTop:'4rem',
    paddingBottom:'4rem',
      height: "100%",
      // background: "#F2F5F9",
    },
  }));
  
const Cards = () => {
  
    const classes = useStyles();
    const [data, setdata] = useState([
        {
            id: 1,
            title: "We Can Supercharge Your Business With Leads. Make Your application Work For You 24/7. Website Marketing. SEO. Adwords. Website Design. Services: Web Design Quotation, Web Design Costs, Web Design Brief",
            price: "1050",
            category: "Application Development",
            image:`${process.env.PUBLIC_URL}/images/application.jpg`
              
          },
        {
          id: 2,
          title: "We Can Supercharge Your Business With Leads. Make Your Website Work For You 24/7. Website Marketing. SEO. Adwords. Website Design. Services: Web Design Quotation, Web Design Costs, Web Design Brief",
          price: "1000",
          category: "Website Development",
          image:`${process.env.PUBLIC_URL}/images/web.jpg`
        },
        
        {
          id: 3,
          title: "We Can Supercharge Your Business With Leads. Make Your Data base Work For You 24/7. Website Marketing. SEO. Adwords. Website Design. Services: Web Design Quotation, Web Design Costs, Web Design Brief",
          price: "1200",
          category: "Data Base Development",
          image:`${process.env.PUBLIC_URL}/images/db.jpg`
        },
        {
          id: 4,
          title: "We Can Supercharge Your Social media marketing. Make Your Website Work For You 24/7. Website Marketing. SEO. Adwords. Website Design. Services: Web Design Quotation, Web Design Costs, Web Design Brief",
        
          price: "700",
          category: "Social Media Marketing",
          image:`${process.env.PUBLIC_URL}/images/social.jpg`
           
        },
        {
            id: 5,
            title: "We Can Supercharge Your Social media marketing. Make Your Website Work For You 24/7. Website Marketing. SEO. Adwords. Website Design. Services: Web Design Quotation, Web Design Costs, Web Design Brief",
            price: "1700",
            category: "Software Development",
            image:`${process.env.PUBLIC_URL}/images/software.jpg`
             
          },
          {
            id: 6,
            title: "We Can Supercharge Your Social media marketing. Make Your Website Work For You 24/7. Website Marketing. SEO. Adwords. Website Design. Services: Web Design Quotation, Web Design Costs, Web Design Brief",
            price: "500",
            category: "Search Engine Optimization",
            image:`${process.env.PUBLIC_URL}/images/seo.jpg`
             
          },
      
      ]);
    return (
        <div className={classes.root}>
        <Grid container >
        <Grid item xs>
          {/* <Paper className={classes.paper}>xs</Paper> */}
        </Grid>
        
        <Grid item xs={11}  className={classes.MuiGridCont}
          container
          spacing={3}
          style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
          {
          
          data.map((elem) => (
            <CardFlip  id={elem.id} title={elem.title} image={elem.image} category={elem.category} price={elem.price} />
            
          ))
        
        }
        </Grid>
        <Grid item xs>
          {/* <Paper className={classes.paper}>xs</Paper> */}
        </Grid>
      </Grid>
            
        </div>
    )
}

export default Cards
