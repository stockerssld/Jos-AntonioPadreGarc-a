import React,{useRef} from 'react'
import styled from 'styled-components'
import { Columns,Column } from '../MyStyles/Columns'
import { Title } from '../MyStyles/title'

export default function SeccionSobreMi(){
    const refAS= useRef(null)
    console.log(refAS)
    return(
        
                <SeccionAboutme id="SobreMi" style={{backgroundColor:'white'}}>
                    <Title style={{textAlign:'center' }}>
                        Sobre Mí
                    </Title>
                    <ColumnsSeccion isMovil isMultiline isGapples  >
                  
                            <Column style={{width:'70%', flex:'none'}}>
                               
                                <Texto>
                                <p style={{textAlign: 'center', marginBottom:0, margin: '0 0 10px', filter:'grayscale(100%)'}}>
                                    <Myimage src="./image/JAPG.jpg"/>
                                </p>
                                <div>
                                    Mi nombre es José Antonio Padre García tengo 23 años, ,
                                    estoy graduado en Ingenieria en Tecnologías de la Información y Comunicación estoy motivado, y seguro de mí
                                    mismo, cuento con conocimientos técnicos y habilidades en el desarrollo, comprometido con las tareas
                                    y trabajos a realizar, con alto nivel de perseverancia, honestidad, y respeto a los demás, mi objetivo es
                                    desarrollar mis conocimientos y capacidades para un bien común tanto personal como laboral.
                                </div> <br/>
                                <div>
                                    soy un desarrollador FullStack, La parte FullStack en las empresas es muy amplio, y
                                    no soy un profesional nacido, durante estos años, he tocado diversas herramientas y lenguajes, 
                                    y me he percatado que la logica con sus reglas de negocio es la clave, lo demas es similar.
                                </div>
                                <br/>

                                <div>
                                    Muchos amigos principiantes pueden buscar mi currículum, este es el código fuente del proyecto, si hay ayuda para usted quiere dar una estrella
                                </div>
                                <br/>
                                Este proyecto está hecho en react
                                </Texto>
                            </Column>
                            <Column style={{width:'20%', textAlign:'center'}} > 
                                <div className="LI-profile-badge"  
                                    data-version="v1" data-size="medium"
                                    data-locale="es_ES" data-type="vertical"
                                    data-theme="dark" data-vanity="jose-antonio-padre-garcía">
                                    <a className="LI-simple-link" href='www.linkedin.com/in/jose-antonio-padre-garcía'>
                                        José Antonio Padre García</a>
                                </div>
                        </Column>
                    </ColumnsSeccion>

                </SeccionAboutme>
        
    )
}
const ColumnsSeccion = styled(Columns)`
-webkit-box-align: center;
align-items:center;
`
const SeccionAboutme = styled.section`
    display:flex;
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 3rem 1.5rem;
`  
const Texto=styled.p`
    color: ${props=>props.color||'#787978'};
    font-weight: ${props=>props.Title ? 'bold': ''};
    font-size: ${props=>props.Title ? '18px': ''};
    font-family: "Microsoft Yahei";
    text-align: justify;
    margin-bottom: 0;
`

const Myimage = styled.img`
    max-width: 200px;
    width: 40%;
    border-radius: 50%;
    vertical-align: middle;
    border: 0;
`