import React from 'react';
import './App.css';
import styled from 'styled-components'
import NabvarJAPG from './Components/Navbar';
import SeccionSobreMi from './Components/SeccionSobreMi';
import IntencionBusqueda from './Components/IntencionBusqueda';

function App() {
  return(
    <>
      <NabvarJAPG/>
      <SeccionSobreMi/>
      <IntencionBusqueda/>
    </>
  )
};
// export 

export default App;
