import React from 'react'
import styled from 'styled-components'
export default function(){
    return(
        <SeccionContactame style={{textAlignLast: 'center'}} id="Contacto">
            <div style={{marginTop: '10%', textAlignLast: 'center'}}>
            <Titulo>
            Póngase en contacto con migo.
            <br/><br/><br/>
            <Abc href="https://api.whatsapp.com/send?phone=+527731795752"  target="_blank" data-wow-delay="0.2s" style={{outline: 'none', textDecoration: 'none'}}>
                +527731795752
            </Abc>
            <br/>
            <Abc href="mailto:padre_japg@163.com"  target="_blank" data-wow-delay="0.2s" style={{outline: 'none', textDecoration: 'none'}}>
            padre_japg@163.com
            </Abc>
            </Titulo>            
            </div>
            
        </SeccionContactame>
    )
}
const Abc=styled.a`
    &:-webkit-any-link{
        color: #2c3e50;
    }
    &:hover{
        color: #09090a;
    }
`
const ButtonLinkedi = styled.a`
    display: inline-block;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .5rem 1rem;
    font-size: 1rem;
    border-radius: .25rem;
    text-transform: uppercase;
    transition: .2s ease-out;
    font-size: .8rem;
    padding: .85rem 2.13rem;
    border-radius: 2px;
    border: 0;
    color: #fff!important;
    margin: 6px;
    white-space: normal!important;
    background-color:#0082CA;
    font-size: .9rem;
    padding: 1rem 2.4rem;
    outline: none;
    text-decoration: none;
`

const SeccionContactame = styled.section`
    background: url(../image/achivements-bg.jpg) no-repeat center;
    background-attachment: fixed;
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 3rem 1.5rem;
    padding-bottom:9rem;
`

const Titulo=styled.p`
    text-align: center;
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    color: #2c3e50;
    letter-spacing: 2px;
    & > a{
        font-size: 1.5rem;
    }
`