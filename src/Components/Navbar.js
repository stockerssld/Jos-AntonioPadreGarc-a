import React from 'react';
import styled from 'styled-components'
import {Navbar,OptionsNav,SeccionOptions,SeccionName} from './../MyStyles/Navbar'
function NabvarJAPG() {

  // const initialValues={
  //   AboutMe:false,
  //   misHabilidades:false,
  //   MisProyecto:false,
  //   OtrosDatos:false
  // }
  // const [options, setOptions]=useState(initialValues)
  // let location = useLocation()
  // React.useEffect(() => {
  //   // ga.send(["pageview", location.pathname]);
  //   console.log(location)
  // }, [location]);
  
  
  // function Change(options){
  //   setOptions(initialValues)
  //   switch (options) {
  //     case "AboutMe":
  //       setOptions({...options,AboutMe: true})
  //       break;
  //     case "misHabilidades":
  //       setOptions({...options,misHabilidades: true})
  //       break;
  //     case "MisProyecto":
  //       setOptions({...options,MisProyecto: true})
  //       break;
  //     case "OtrosDatos":
  //       setOptions({...options,OtrosDatos: true})
  //       break;
  //     default:
  //       break;
  //   }
  // }
  
  return(
    <Navbar fixed className="nav">
      <a href="/#" style={{outline:'none', textDecoration:'none', color: 'white'}}>
      <SeccionName img='./image/Logo.png'>
        José Antonio Padre García
      </SeccionName>
      </a>
      <SeccionOptions >

        <AB href="/#SobreMi">
        <OptionsNav key="1" /* Options={options.AboutMe} onClickCapture={()=> Change("AboutMe")}*/>
          Sobre Mi
        </OptionsNav>
        </AB>
        {/* <AB href="/#CurriculumJAPG"> */}
        {/* <OptionsNav key="3"  */}
         {/* Options={options.MisProyecto} onClickCapture={()=> Change("MisProyecto")} */}
          {/* Mi CV */}
        {/* </OptionsNav> */}
        {/* </AB> */}
        <AB href="/#Habilidades">
        <OptionsNav key="2" /*Options={options.misHabilidades} onClickCapture={()=> Change("misHabilidades")}*/>
          Mis habilidades
        </OptionsNav >
        </AB>
        <AB href="/#Contacto">
        <OptionsNav key="4" /*Options={options.OtrosDatos} onClickCapture={()=> Change("OtrosDatos")}*/ >
          Contacto
        </OptionsNav>
        </AB>
      </SeccionOptions>
    </Navbar>
  )
};
// export 


export default NabvarJAPG;
export const AB = styled.a`
    outline:none;
    display: block;
    text-decoration:none;
    &:focus::after {
          opacity: 1;
          transform: translateY(0px);
          -moz-transform: translateY(0px);
          -webkit-transform: translateY(0px);
          outline:none;
          text-decoration:none;
    }
    &:-webkit-any-link{
      outline:none;
      text-decoration:none;
    }

`
