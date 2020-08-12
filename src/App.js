import React,{useEffect, useRefd, useRef} from 'react';
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

// import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter
  
} from "react-router-dom";

function App() {
  
  const RefScroll = useRef()
  const location = useLocation()

  useEffect(()=>{
    AOS.init({
      duration: 2000
    })
  },[])
  useEffect(()=>{
  if(RefScroll && location.hash.includes("#SobreMi")){
      // RefScroll?.current?.scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'start',
      //     inline: 'center'
      // })
      console.log(RefScroll)
  }
  }, [RefScroll, location.hash])

  return(
    <>
    
      <AllSeccion style={{backgroundColor:'#f1f1f1'}} ref={RefScroll}  data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
    

        <PrincipalInicio/>
        <NabvarJAPG />
        <SeccionSobreMi/>
        <IntencionBusqueda />
        <MisExperiencias/>
        <MisHabilidades/>
        {/* <MiCV/> */}

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
