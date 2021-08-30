import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaReact } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import { AiFillApple } from 'react-icons/ai';
import { RiFlutterLine } from 'react-icons/ri';
import { FaAngular } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { DiMsqlServer } from 'react-icons/di';
import { DiPhp } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { DiWordpress } from 'react-icons/di';
import { DiMagento } from 'react-icons/di';
import { FaShopify } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import "./ImageSlider.css"

const useStyles = makeStyles((theme) => ({
    
  root: {
  paddingTop:'2rem',
  paddingBottom:'2rem',
    background: "#F2F5F9",
    textAlign:"center"
  },
}));


const ImageSlider = () => {
 
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        adaptiveHeight:true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
         
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    };

  const classes = useStyles();

  return (
    <div className={classes.root}>
    
    <Slider {...settings}>
     

      
      <div>
      <AiFillApple className="icon" color="#0B1926" />

      <h3>IOS</h3>
     
      </div>
      <div>
      <AiFillAndroid className="icon" color="#0B1926"/>
        <h3>ANDROID</h3>
      </div>
      <div>
      <FaReact className="icon" color="#0B1926" />

        <h3>REACT NATIVE</h3>
      </div>
      <div>
        <RiFlutterLine className="icon" color="#0B1926"/>
        <h3>FLUTTER</h3>
      </div>
      <div>
      <FaReact className="icon" color="#0B1926" />

        <h3>REACT JS</h3>
      </div>
      <div>
        <FaAngular className="icon" color="#0B1926"/>
        <h3>ANGULAR</h3>
      </div>

      <div>
        <FaVuejs className="icon" color="#0B1926"/>
        <h3>VUE JS</h3>
      </div>
      <div>
        <SiFirebase className="icon" color="#0B1926"/>
        <h3>FIREBASE</h3>
      </div>
      <div>
        <DiMysql className="icon" color="#0B1926"/>
        <h3>MY SQL</h3>
      </div>
      <div>
        <DiMsqlServer className="icon" color="#0B1926"/>
        <h3>MS SQL</h3>
      </div>
      <div>
        <DiPhp className="icon" color="#0B1926"/>
        <h3>PHP</h3>
      </div>
      <div>
        <DiJava className="icon" color="#0B1926"/>
        <h3>PHP</h3>
      </div>
      <div>
        <DiWordpress className="icon" color="#0B1926"/>
        <h3>WORDPRESS</h3>
      </div>
      <div>
        <DiMagento className="icon" color="#0B1926"/>
        <h3>MAGENTO</h3>
      </div>
      <div>
        <FaShopify className="icon" color="#0B1926"/>
        <h3>Shopify</h3>
      </div>
    </Slider>
  </div>
  )
}

export default ImageSlider
