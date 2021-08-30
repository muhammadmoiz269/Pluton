import React from 'react'
import Grid from "@material-ui/core/Grid";
import ContactForm from '../../Components/ContactForm/ContactForm';
import ParticleJs from "../../Components/Particles/ParticleJs";





const Contact = () => {
    return (
        <div>
            
      <Grid container>
      <Grid item xs={12} className="services" style={{marginTop:"-100px"}}>
          <ParticleJs
            head="Empowering People To Connect With Us"
            para="Committed to people, committed to future"
          />
        </Grid>
        
        <Grid item xs={12} style={{display:"flex", justifyContent:"center", alignItems:"center", background:"#F2F5F9"}}>
            <ContactForm/>
          
        </Grid>
      
        
      </Grid>
            
        </div>
    )
}

export default Contact
