import React from 'react';
import './App.css';
import styled from 'styled-components'
import NabvarJAPG from './Components/Navbar';
import SeccionSobreMi from './Components/SeccionSobreMi';
import IntencionBusqueda from './Components/IntencionBusqueda';
import PongaseEnContacto from './Components/PongaseEnContacto';

function App() {
  return(
    <>
      <NabvarJAPG/>
      <SeccionSobreMi/>
      <IntencionBusqueda/>
      <PongaseEnContacto/>
      <p style={{textAlign: 'center'}}>
      © José Antonio Padre García . . . 2 0 2 0
      </p>
    </>
  )
};
// export 

export default App;
