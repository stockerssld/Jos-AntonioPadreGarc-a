import React from 'react'
import styled from 'styled-components'
import Img from './../image/services-bg.jpg'
import { Title } from '../MyStyles/title'
import { Columns, Column } from '../MyStyles/Columns'

export default function(){
    return(
        <>
        <SeccionBusqueda     
        Img="./../image/services-bg.jpg"
        >
        <div style={{marginTop: '10%'}}>
            <Title style={{textAlign:'center'}}>
                Intención de Busqueda de Empleo
            </Title>
            <br/>
            <Columns isMovil>
                <ContentAlign>
                    <Image src="./image/js.png"/>
                    <Texto color="#7104e8" Title>
                        Caracteristicas del Front  
                    </Texto>
                    <Texto>
                    Utilice JS para lograr efectos funcionales de front-end comunes,                
                    Utilice React js para desarollar algunas paginas.
                    Utilice Redux para el gestionamiento de estados
                    Utilice CSS3, SASS, LESS para los estilo
                    Utilice StyledComponent para un mejor control de estilos en react
                    </Texto>
                </ContentAlign>
                <ContentAlign>
                    <Image src="./image/css.png"/>
                    <Texto color="#7104e8" Title>
                    Caracteristicas del Back
                    </Texto>
                    <Texto>
                        Realizacion de apis
                        Utilice Aws s3 para el gestionamiento de datos
                        Utilice varios lenguajes (Java, Node, Crystal, php, c#)
                        Utilice varios Frameworks (Spring, Express, Kemal, Laravel, RoR)
                    </Texto>                       
                </ContentAlign>
                <ContentAlign>
                <Image src="./image/h5.png"/>
                <Texto color="#7104e8" Title>
                    Caracteristicas de Movil
                </Texto>
                <Texto>
                    Realización de interfaces para dispositivos moviles, y conexión de apis
                    Utilice Android Studio
                    Utilice React Native    
                </Texto>                       
                    
                </ContentAlign>
                <ContentAlign>
                <Image src="./image/web.png"/>
                <Texto color="#7104e8" Title>
                    Caracteristicas de Diseño
                    </Texto>
                    <Texto>
                    Paginas adaptables, codigo simple, no redundate y entendible.
                    Algunos efectos de animación suave con diferentes navegadores.
                    He maquetado algunos diseños en Adobe XD                    
                    </Texto>
                </ContentAlign>
            </Columns>
            </div>
        </SeccionBusqueda>
        </>
    )
}

const ContentAlign = styled(Column)`
    text-align: center;
    
    font-size: 14px;
    flex:1;
    text-align: -webkit-center;
`

const Image = styled.img`
    flex:1;
    display:flex;
    width: 5rem;
    height: 5rem;
`
const Texto=styled.p`
    color: ${props=>props.color||'#787978'};
    font-weight: ${props=>props.Title ? 'bold': ''};
    font-size: ${props=>props.Title ? '18px': ''};
    font-family: "Microsoft Yahei";
    text-align: center;
    margin-bottom: 0;
`
const SeccionBusqueda= styled.section`
    background: url(../image/services-bg.jpg) no-repeat center;
    background-attachment: fixed;
    height: 100vh;
    display:'flex';
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 3rem 1.5rem;
`