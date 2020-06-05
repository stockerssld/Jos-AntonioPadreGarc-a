import React,{useEffect, useRef} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css';
import styled from 'styled-components'
import NabvarJAPG from './Components/Navbar';
import SeccionSobreMi from './Components/SeccionSobreMi';
import IntencionBusqueda from './Components/IntencionBusqueda';
import PongaseEnContacto from './Components/PongaseEnContacto';
import MisExperiencias from './Components/MisExperiencias'
import MiCV from './Components/MiCV'
import MisHabilidades from './Components/MisHabilidades'
import PrincipalInicio from './Components/PrincipalInicio'


function App() {
  
  const   entrada = useRef()
  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
  },[])
  

  return(
    <>
      <AllSeccion  data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
    

        <PrincipalInicio/>
        
        <NabvarJAPG />
        {/* <input type="text" placeholder="s" ></input>
        <button onClick={()=>console.log(entrada)}/> */}
        <SeccionSobreMi/>
        <IntencionBusqueda />
        <MiCV/>
        <MisHabilidades/>
        <MisExperiencias/>
        <PongaseEnContacto/>
        
        
        <p style={{textAlign: 'center'}}>
        © José Antonio Padre García . . . 2 0 2 0
        </p>
      </AllSeccion>

      <NoFountView>
        <h1>
        ERROR...<br/>
        Rango de pantalla no aceptado...
        </h1>
      </NoFountView>
    </>
  )
};

const AllSeccion = styled.div`
  @media screen and (max-width: 286px){
    display: none;
  }
  @media screen and (min-width: 1800px){
    display: none;
  }
`

const NoFountView = styled.div`
  display:none;
  text-align:center;
  flex:1;
  justify-content:center;
  @media screen and (max-width: 286px){
    display:flex;
  }
  @media screen and (min-width: 1800px){
    display:flex;
  }
`

export default App;
