import React,{useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import LatestCard from '../LatestCard/LatestCard';

const useStyles = makeStyles((theme) => ({

      media: {
        height: 160,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
      },
      root: {
      paddingTop:'4rem',
      paddingBottom:'4rem',
      // paddingLeft:"1rem",
      // flexGrow:1,
        height: "min-content",
        background: "#F2F5F9",
      },
    }));


const LatestUpdates = () => {
    const classes = useStyles();
    const [data, setdata] = useState([
      {
          id: 1,
          title: "React Market Goes High",
          date: "June 4, 2019",
          news: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          image:`${process.env.PUBLIC_URL}/images/Latest1.jpg`,
          animation:"fade-left",
         
            
        },
        {
          id: 2,
          title: "Dip in PHP",
          date: "September 25, 2016",
          news: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          image:`${process.env.PUBLIC_URL}/images/Latest2.jpg`,
          animation:"fade-up",
         
            
        },
        {
          id: 3,
          title: "BlockChain Going Up",
          date: "December 14, 2020",
          news: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
          image:`${process.env.PUBLIC_URL}/images/Latest1.jpg`,
          animation:"fade-right",
         
            
        },
    
    ]);
    return (
       
        <div className={classes.root}>
        <Grid container  >
        <Grid item xs lg={1}>
        
        </Grid>
        
        <Grid item xs={10} lg={10}  className={classes.MuiGridCont}
          container
          spacing={2}
          
          style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
          
        
          {
          
          data.map((elem) => (
            <LatestCard  id={elem.id} title={elem.title} image={elem.image} news={elem.news} date={elem.date}  anim={elem.animation} />
            
          ))
        
        }
        </Grid>

     
        
       
      
       
        <Grid item xs lg={1}>
        
        </Grid>
        
      </Grid>
            
        </div>
    )
}

export default LatestUpdates
