import React from 'react'
import styled from 'styled-components'
import { Columns,Column } from '../MyStyles/Columns'
import { Title } from '../MyStyles/title'

export default function SeccionSobreMi(){
    return(
        
                <SeccionAboutme id="SobreMi"  style={{backgroundColor:'whitesmoke'}}>
                    <Title style={{textAlign:'center' }}>
                        Sobre Mí
                    </Title>
                    <ColumnsSeccion isMovil isMultiline isGapples style={{ placeContent: 'center', backgroundColor: 'transparent'}} >
                  
                            <Column style={{width:'70%', flex:'none' }}>
                               
                                <p style={{textAlign: 'center', marginBottom:0, margin: '0 0 10px', filter:'grayscale(100%)'}}>
                                    <Myimage src="./image/JAPG.jfif"/>
                                </p>
                                <Texto>

                                    Hola, mi nombre es José Antonio Padre García tengo 23 años,
                                    estoy graduado en Ingeniería en Tecnologías de la Información y Comunicación estoy motivado, y seguro de mí
                                    mismo, cuento con conocimientos técnicos y habilidades en el desarrollo, comprometido con las tareas
                                    y trabajos a realizar, con alto nivel de perseverancia, honestidad, y respeto a los demás, mi objetivo es
                                    desarrollar mis conocimientos y capacidades para un bien común tanto personal como laboral, me gusta trabajar 
                                    ordenadamente y tener las pautas claras en los proyectos.
                                <br/><br/>
                                
                                    Soy un desarrollador autodidácta FullStack, La parte FullStack en las empresas es muy amplio, y
                                    no soy un profesional nacido, durante estos años, he tocado diversas herramientas y lenguajes, 
                                    y me he percatado que la lógica con sus reglas de negocio es la clave, lo demás es similar.
                                <br/><br/>
                            
                                </Texto>
                            </Column>
                            <Column style={{ textAlign:'center'}} > 
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