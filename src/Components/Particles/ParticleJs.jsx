import React from 'react'
import Particles from 'react-particles-js';
import "./ParticlesJs.css"
import Heading from '../../Components/Heading/Heading';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const ParticleJs = ({head,para,background}) => {
	return (
		<div>
			<div className="particles-js" style={{textAlign:"center"}}>
			<Heading className="Head" head={head} para={para}  Headcolor="#ffff"/>
			</div>
		
			<Particles
    	params={{
	    "particles": {
	        "number": {
	            "value": 30
	        },
	        "size": {
	            "value": 4
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    },
		responsive: [
         
			{
			  breakpoint: 700,
			  "number": {
	            "value": 20
	        },
			},
			{
			  breakpoint: 500,
			  "number": {
	            "value": 10
	        },
			}
		  ]
	}}
	
	style={{
		background:{background}
	}}
	
	/>
		
		</div>
	)
}

export default ParticleJs

