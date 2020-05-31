import React from 'react'
import styled from 'styled-components'
import {Column} from './Columns'


export const SeccionName=(props,{children})=>(
    <Column isContainer isMovil>
        <ContentAlignImage porcentaje="20%">
            <Img src={props.img}/>
        </ContentAlignImage>
        <Column>
            <Name>
            {props.children}
            </Name>
        </Column>
    </Column>
)
const ContentAlignImage = styled(Column)`
    align-self: center;
`
const Img = styled.img`
    flex:1;
    display:flex;
    width: 5rem;
    height: 5rem;
`
const Name = styled.h3`
    font-stretch: 1;
    font-family: cursive;
`
export const SeccionOptions = ({children}) =>(
    <DisplayScreen isMovil>
      {children}
    </DisplayScreen>
)
export const OptionsNav = styled(Column)`
    flex: 1;
    font-weight:100;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align:center;
    &:hover{
        color:darkorange;
    }
    cursor: pointer;
`
const DisplayScreen = styled(Column)`
    @media screen and (max-width: 677px) {
        display: none;
    }
`

export const Navbar =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    background-color: ${props=> props.colorBackground || "#2c3e50"} ;
    color: ${props=> props.color || "#f5f5f5"} ;
    width: 100%;
    height: 70px;
    position: ${props=> !props.fixed || 'fixed'};
    top: ${props=> !props.fixed || '0'} ;
    z-index: ${props=> !props.fixed || '999'} ;
`