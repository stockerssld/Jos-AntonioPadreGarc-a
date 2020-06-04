import React from 'react'
import {Title} from './../MyStyles/title'
import styled from 'styled-components'
import {Columns, Column} from './../MyStyles/Columns'
export default function(){
    return(
        <SeccionPortafolio>
            <Title>
                Mi portafolio
            </Title>

           
            <Columns isMovil isMultiline >
                <Column data-aos='zoom-in-right'  style={{background:'green', alignContent:'center', display:'flex', flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Card style={{background:"yellow"}}>
                        HOLA
                    </Card>
                </Column >
                <Column data-aos='zoom-in-right' style={{background:"red"}}>
                    2
                </Column>
                <Column  data-aos='zoom-in-right' style={{background:"blue"}}>
                    3
                </Column>
                <Column data-aos='zoom-in-right' style={{background:"green"}}>
                    4
                </Column>
            </Columns>
        </SeccionPortafolio>
    )
}

const SeccionPortafolio = styled.div`
    display:flex;
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 3rem 1.5rem;
    @media screen and (min-width: 1024px){        
        padding: 15rem 1.5rem;
    }

`

const Card = styled.div`
width: 29%;
    background: #fff;
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 45px 30px 60px 30px;
    transition: 0.5s;

`