import React from 'react'
import styled,{keyframes} from 'styled-components'

import Logo from './../image/Logo1.png'

import logoReact from './../image/logo.svg';

import { Columns } from '../MyStyles/Columns'
import { Title } from '../MyStyles/title'
export default function(){
    return(
            <>
          
            <SeccionPrincipal data-aos="zoom-out-up" style={{textAlign:'center', justifyContent: 'center'}}>
                
                    <LogoRotate src={Logo} rotate="1"/>
                {/* <LogoRotate src={logoReact} style={{top:0, width:'10rem',height:'10rem'}}/> */}
                 <MyIntro>
                    <Nombre data-aos='zoom-in-right' _msthash="322023" _msttexthash="302393">Hola, <br/>soy José Antonio Padre García</Nombre>

                    <Sub data-aos='zoom-in-right' _msthash="322946" _msttexthash="1125007">Un Desarrollador Full Stack</Sub>
                    <div  data-aos='fade-up'>
                        <ButtonAboutMe _msthash="41158" _msttexthash="125255">Sobre mí.</ButtonAboutMe>
                        <ButtonMyWorks id="mypro"  _msthash="66300" _msttexthash="132808">Mi trabajo</ButtonMyWorks>
                    </div>
                </MyIntro>  
            </SeccionPrincipal>
            
            </>
    )
}
const ButtonMyWorks = styled.span`
    display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 48px;
    font-size: 16px;
    /* color: #96a3b2; */
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    background: rgba(256,256,256,0.8); 

    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
    transition: all 1s 1s;
`
const ButtonAboutMe = styled.span`
     display: inline-block;
    width: 150px;
    height: 50px;
    line-height: 48px;
    font-size: 16px;
    /* color: #96a3b2; */
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    background: rgba(256,256,256,0.8);
    background: #2c3e50;
    color: #fff;


    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
    transition: all 1s 1s;
`
const SeccionPrincipal= styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    min-height: 700px;
    color: #2c3e50;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    text-align:center;
    flex: 1;
    display: flex;
`
const Nombre = styled.h1`
    font-family: cursive, 'Lato', sans-serif;
    font-size: 70px;
    font-weight: 400;
    margin: 50px 0 30px;
    margin-top:0;

    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
    transition: all 1s 0s;
`
const Sub = styled.h3`
    letter-spacing: 3px;
    font-size: 30px;
    margin: 40px 0;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
    transition: all 1s 0.5s;
`
const MyIntro = styled.div`
    padding: 20vh 0 0 ;
    position: absolute;
    width:100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    letter-spacing: 2px;
    transition: all 0.35s;
    background: rgba(256,256,256,0.5);

`


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`
const rotateB = keyframes`
    from {
        transform: rotate(360deg);
    }
    to{0
        transform: rotate(0deg);
    }
`
const LogoRotate = styled.img`
    animation: ${rotate} 20s linear infinite;
    place-content: center;
    top: 10;
    align-self: center;
    @media screen and (max-width: 990px) {
        display: none;
    }
    @media screen and (min-width: 1500px){
        display:none;
    }
    
`
