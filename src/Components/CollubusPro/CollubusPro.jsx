import React, { useEffect } from "react";
import Heading from "../Heading/Heading";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "../Box/Box";
import { Divider } from "@material-ui/core";
import { CircularProgress, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import "./CollubusPro.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
    paddingTop: "4rem",
    paddingBottom: "4rem",
    height: "min-content",
    background: "#061724",
  },
}));

const CollubusPro = ({
  heads,
  box1Name,
  box2Name,
  box3Name,
  box4Name,
  box5Name,
  box1Icon,
  box2Icon,
  box3Icon,
  box4Icon,
  box5Icon,
}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Heading head={heads} Headcolor="#ffff" />

      <Grid container className="OuterGrid">
        <Grid item className="col1" lg={3} md={3} xs={12} container>
          <div data-aos="fade-right">
            <Box logo={box1Icon} name={box1Name} amount="$ 98000" />
          </div>
          <div data-aos="fade-right">
            <Box logo={box2Icon} name={box2Name} amount="$ 89000" />
          </div>
          <div data-aos="fade-right">
            <Box logo={box3Icon} name={box3Name} amount="$ 74300" />
          </div>
        </Grid>
        <Grid item container className="col2" lg={3} md={3} xs={12}>
          <div data-aos="fade-left">
            <Box logo={box4Icon} name={box4Name} amount="$ 67000" />
          </div>
          <div data-aos="fade-left">
            <Box logo={box5Icon} name={box5Name} amount="$ 34000" />
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12} className="col3">
          <Typography
            variant="h5"
            style={{
              color: "#ffff",
              textAlign: "justify",
              paddingRight: "5rem",
            }}
          >
            We intend to on-board the next billion users into the world of
            blockchain by creating simple and beautiful applications.
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "#ffff", paddingTop: "3rem", letterSpacing: "3px" }}
          >
            {" "}
            TOTAL VALUE CREATED{" "}
          </Typography>

          <Typography
            variant="h3"
            style={{ color: "#ffff", paddingTop: "3rem" }}
          >
            $
            <CountUp
              delay={0}
              start={0}
              end={128360}
              duration={5}
              style={{ paddingLeft: "1rem" }}
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CollubusPro;
