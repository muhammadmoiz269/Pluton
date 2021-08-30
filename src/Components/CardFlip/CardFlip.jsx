import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import Cards from "../../Components/Cards/Cards"
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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';


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
  cardsback:{
    background: '#575FCF',
    color:"#00293C",
    // display: 'flex',
    // justifyContent:'center',
    // alignItems:'center',
    // flexFlow:'column'
  },
  root: {
  // paddingTop:'5rem',
    height: "100%",
  },
}));


const CardFlip = ({title,image,category,price,id}) => {
  const classes = useStyles();
    const [Flipped, setFlipped] = useState(false)

    const handleClick=()=>{
        setFlipped(!Flipped)
    }
    return (
      <Grid className={classes.Gridd} item xs={12} sm={6} md={4} lg={4} key={id}  onMouseEnter={(e) => setFlipped(true)} onMouseLeave={(e) => setFlipped(false)}>
        <ReactCardFlip isFlipped={Flipped} flipDirection="vertical">
          <div>
         
               <Card className={classes.root}  
                  >
                 <CardActionArea >
                   <CardMedia
                    className={classes.media}
                    image={image}
                    
                  />
                  <CardContent style={{height:"80px"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {category}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      noWrap
                    >
                      {title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions 
                  style={{
                    AlignContent: "stretch",
                    flexWrap: "nowrap",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderBottom:'2px solid #3174B2'
                  }}
                >
                  <Button size="small" color="primary">
                    $ {price}
                  </Button>

                  <IconButton>
                    <FlipCameraAndroidIcon
                      // onClick={() => UpdateTrigger(elem.id)}
                     
                      
                      style={{
                        textAlign: "right",
                        color: "#ff5e57",
                      }}
                    />
                  </IconButton>
                  <IconButton>
                    <ArrowForwardIosIcon
                      // onClick={() => DeleteTrigger(elem.id)}
                      style={{
                        textAlign: "right",

                        color: "#575fcf",
                        
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
          
         
           
          </div>
  
          <div>
            
          <Card className={classes.cardsback}>
                 <CardActionArea >
                 
                  <CardContent style={{height:"310px", display:'flex',justifyContent:'center', alignItems:'center',flexFlow:'column'}}>
                    <Typography  gutterBottom variant="h5" component="h2">
                      {category}
                    </Typography>
                    <Typography
                    style={{color:'#ffff'}}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      // noWrap
                    >
                      {title}
                    </Typography>
                    <Button variant="outlined" onClick={handleClick} style={{color:'#ffff', border:' 1px solid #fff', marginTop:'2rem'}}>
                  View More
                  </Button>
                  </CardContent>
                
                </CardActionArea>
               
              </Card>
          </div>
        </ReactCardFlip>
    </Grid>
      )
}

export default CardFlip
