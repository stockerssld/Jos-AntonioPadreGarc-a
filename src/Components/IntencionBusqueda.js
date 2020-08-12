import React from 'react'
import styled from 'styled-components'
import Img from './../image/services-bg.jpg'
import { Title } from '../MyStyles/title'
import { Columns, Column } from '../MyStyles/Columns'

export default function(){
    return(
        <>
        <SeccionBusqueda     
        >
        <div style={{marginTop: '10%'}}>
            <Title style={{textAlign:'center'}}>
                Intención de Busqueda de Empleo
            </Title>
            <br/>
            <Columns isMovil isMultiline style={{background: 'transparent'}}>
                <ContentAlign data-aos='fade-up'>
                    <Image src="./image/js.png"/>
                    <Texto color="#7104e8" Title>
                        Caracteristicas del Front  
                    </Texto>
                    <Texto>
                    Utilice Mint-Lang para paginas LandingPages.
                    <br/>
                    Utilice JS para lograr efectos funcionales de front-end comunes.                
                    <br/>
                    Utilice React js, Angular 9 para desarollar algunas paginas.
                    <br/>
                    Utilice Redux para el gestionamiento de estados.
                    <br/>
                    Utilice CSS3, SASS, SCSS,  STYLUS y LESS para los estilos.
                    <br/>
                    Utilizo StyledComponent para un mejor control de estilos en react
                    <br/>
                    Utilice diferentes frameworks y librerias de estilos Rbx, Material, Bulma, Bootstrap,
                    </Texto>
                </ContentAlign>
                <ContentAlign data-aos='fade-up'>
                    <Image src="./image/css.png"/>
                    <Texto color="#7104e8" Title>
                    Caracteristicas del Back
                    </Texto>
                    <Texto>
                        Realizacion de apis
                        <br/>
                        Utilice Aws s3 para el gestionamiento de datos
                        <br/>
                        Utilice varios lenguajes (Node, Crystal, php, c#, Java, Ruby)
                        <br/>
                        Utilice varios Frameworks (Express, Kemal, Laravel, Spring, RoR)
                        <br/>
                        Utilice diferentes bases de datos SQL server, Oracle, MongoDB, Postgrest, Mysql, Sql lite
                    </Texto>                       
                </ContentAlign>
                <ContentAlign data-aos='fade-up'>
                <Image src="./image/h5.png"/>
                <Texto color="#7104e8" Title>
                    Caracteristicas de Movil
                </Texto>
                <Texto>
                    Realización de interfaces para dispositivos moviles, y conexión de apis
                    <br/>
                    Utilice Android Studio y React Native    
                    <br/>
                    Actualmente estoy aprendiendo flutter.
                </Texto>                       
                    
                </ContentAlign>
                <ContentAlign data-aos='fade-up'>
                <Image src="./image/web.png"/>
                <Texto color="#7104e8" Title>
                    Caracteristicas de Diseño
                    </Texto>
                    <Texto>
                    Paginas adaptables, codigo simple, no rebundante y entendible.
                    <br/>
                    Algunos efectos de animación suave con diferentes navegadores.
                    <br/>
                    He maquetado algunos diseños en XD                    
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
    @media only screen and (max-width:687px){
        border-bottom-style: groove;
        
    }
`

const Image = styled.img`
    flex:1;
    display:flex;
    width: 5rem;
    height: 5rem;
`
const Texto=styled.p`
    color: ${props=>props.color||'#2c3e50'};
    font-weight: ${props=>props.Title ? 'bold': ''};
    font-size: ${props=>props.Title ? '18px': ''};
    font-family: "Microsoft Yahei";
    text-align: center;
    margin-bottom: 0;
`
const SeccionBusqueda= styled.section`
    background: url(../image/services-bg.jpg) no-repeat center;
    background-attachment: fixed;
    display:'flex';
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 3rem 1.5rem;
    
`