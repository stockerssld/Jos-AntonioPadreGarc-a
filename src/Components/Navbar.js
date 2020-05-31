import React,{useState, useEffect} from 'react';
// import './App.css';
import styled from 'styled-components'
import {Column, Columns} from './../MyStyles/Columns'
import {Navbar,OptionsNav,SeccionOptions,SeccionName} from './../MyStyles/Navbar'
function NabvarJAPG() {
  const initialValues={
    AboutMe:false,
    misHabilidades:false,
    MisProyecto:false,
    OtrosDatos:false
  }
  const [options, setOptions]=useState(initialValues)
  
  function Change(options){
    setOptions(initialValues)
    switch (options) {
      case "AboutMe":
        setOptions({...options,AboutMe: true})
        break;
      case "misHabilidades":
        setOptions({...options,misHabilidades: true})
        break;
      case "MisProyecto":
        setOptions({...options,MisProyecto: true})
        break;
      case "OtrosDatos":
        setOptions({...options,OtrosDatos: true})
        break;
      default:
        break;
    }
  

  }
  
  return(
    <Navbar fixed>
      <SeccionName img="https://avatars3.githubusercontent.com/u/49961390?s=400&u=9d0b82d60f97fe855dbe260f07a12c2ced710735&v=4">
        {/* <h3> */}
      José Antonio Padre García
      {/* </h3> */}
      </SeccionName>
      <SeccionOptions>
        <OptionsNav key="1" Options={options.AboutMe} onClickCapture={()=> Change("AboutMe")}>
          Sobre Mi
        </OptionsNav>
        <OptionsNav key="2" Options={options.misHabilidades} onClickCapture={()=> Change("misHabilidades")}>
          Mis habilidades
        </OptionsNav >
        <OptionsNav key="3" Options={options.MisProyecto} onClickCapture={()=> Change("MisProyecto")} >
          Mis Proyectos
        </OptionsNav>
        <OptionsNav key="4" Options={options.OtrosDatos} onClickCapture={()=> Change("OtrosDatos")} >
          Otros Datos
        </OptionsNav>
      </SeccionOptions>
    </Navbar>
  )
};
// export 


export default NabvarJAPG;
