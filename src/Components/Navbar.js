import React from 'react';
// import './App.css';
import styled from 'styled-components'
import {Column, Columns} from './../MyStyles/Columns'
import {Navbar,OptionsNav,SeccionOptions,SeccionName} from './../MyStyles/Navbar'
function NabvarJAPG() {
  return(
    <Navbar fixed>
      <SeccionName img="https://avatars3.githubusercontent.com/u/49961390?s=400&u=9d0b82d60f97fe855dbe260f07a12c2ced710735&v=4">
        {/* <h3> */}
      José Antonio Padre García
      {/* </h3> */}
      </SeccionName>
      <SeccionOptions>
        <OptionsNav>
          Sobre Mi
        </OptionsNav>
        <OptionsNav>
          Mis habilidades
        </OptionsNav>
        <OptionsNav>
          Mis Proyectos
        </OptionsNav>
        <OptionsNav>
          Otros Datos
        </OptionsNav>
      </SeccionOptions>
    </Navbar>
  )
};
// export 


export default NabvarJAPG;
