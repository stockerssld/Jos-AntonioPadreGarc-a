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
    <Navbar fixed className="nav">
      <SeccionName img='./image/49961390.png'>
        {/* <h3> */}
      José Antonio Padre García
      {/* </h3> */}
      </SeccionName>
      <SeccionOptions>
        <a href="/#SobreMi">
        <OptionsNav key="1" Options={options.AboutMe} onClickCapture={()=> Change("AboutMe")}>
          Sobre Mi
        </OptionsNav>
        </a>
        <OptionsNav key="2" Options={options.misHabilidades} onClickCapture={()=> Change("misHabilidades")}>
          Mis habilidades
        </OptionsNav >
        <AB href="/#CurriculumJAPG" >
        <OptionsNav key="3" Options={options.MisProyecto} onClickCapture={()=> Change("MisProyecto")} >
          Mi CV
        </OptionsNav>
        </AB>
        <OptionsNav key="4" Options={options.OtrosDatos} onClickCapture={()=> Change("OtrosDatos")} >
          Otros Datos
        </OptionsNav>
      </SeccionOptions>
    </Navbar>
  )
};
// export 


export default NabvarJAPG;
export const AB = styled.a`
    &:focus::after {
          opacity: 1;

          transform: translateY(0px);
          -moz-transform: translateY(0px);
          -webkit-transform: translateY(0px);
        }

`