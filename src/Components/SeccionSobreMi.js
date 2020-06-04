import React from 'react'
import styled from 'styled-components'
import { Column } from '../MyStyles/Columns'
import { Title } from '../MyStyles/title'

export default function SeccionSobreMi(){
    return(
        
            <Column>
                <SeccionAboutme>
                    <Title style={{textAlign:'center'}}>
                        Sobre Mí
                    </Title>
                    <Texto>
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
                </SeccionAboutme>
            </Column>
        
    )
}
const SeccionAboutme = styled.section`
    display:flex;
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 3rem 1.5rem;
    @media screen and (min-width: 1024px){
            .section.is-large {
                padding: 0rem 1.5rem;
            }
    }
`  
const Texto=styled.p`
    color: ${props=>props.color||'#787978'};
    font-weight: ${props=>props.Title ? 'bold': ''};
    font-size: ${props=>props.Title ? '18px': ''};
    font-family: "Microsoft Yahei";
    text-align: justify;
    margin-bottom: 0;
`