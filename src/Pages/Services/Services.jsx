import React from "react";
import ParticleJs from "../../Components/Particles/ParticleJs";
import Grid from "@material-ui/core/Grid";
import "./Services.css";
import Heading from "../../Components/Heading/Heading";
import AboutSection from "../../Components/AboutSection/AboutSection";
import ImageSlider from "../../Components/Slickcarousel/ImageSlider";
import MuiButton from "../../Components/MuiButton/MuiButton";
import PhoneIcon from "@material-ui/icons/Phone";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CollubusPro from "../../Components/CollubusPro/CollubusPro";

import { VscDebugStart } from "react-icons/vsc";
import { GoMegaphone } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import ServicesPro from "../../Components/ServicesPro/ServicesPro";

const Services = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} className="services" style={{marginTop:"-100px"}}>
          <ParticleJs
            head="Empowering People To Deliver The Best Services"
            para="Committed to people, committed to future"
          />
        </Grid>

        <Grid item xs={12}>
          <Heading head="Services We Provide" Headcolor="#0A2131" pb="3rem" />
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "1rem",
            }}
          ></div>
        </Grid>
        <ServicesPro />

        <Grid item xs={12}>
          <Heading head="Connect With Us" Headcolor="#0A2131" pb="4rem" />
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "3rem",
            }}
          >
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#ffff" }}
            >
              <MuiButton text="Contact" icon={<PhoneIcon />} />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
