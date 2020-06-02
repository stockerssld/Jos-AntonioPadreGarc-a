import React,{useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css';
import styled from 'styled-components'
import NabvarJAPG from './Components/Navbar';
import SeccionSobreMi from './Components/SeccionSobreMi';
import IntencionBusqueda from './Components/IntencionBusqueda';
import PongaseEnContacto from './Components/PongaseEnContacto';
import MisExperiencias from './Components/MisExperiencias'
import MiPortafolio from './Components/MiPortafolio'
import MisHabilidades from './Components/MisHabilidades'
function App() {
  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
  },[])
  return(
    <div  data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
      <NabvarJAPG/>
      <SeccionSobreMi/>
      <IntencionBusqueda/>
      <MiPortafolio/>
      <MisHabilidades/>
      <MisExperiencias/>
      <PongaseEnContacto/>
      
      <p style={{textAlign: 'center'}}>
      © José Antonio Padre García . . . 2 0 2 0
      </p>
    </div>
  )
};
// export 

export default App;
