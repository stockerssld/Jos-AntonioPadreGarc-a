import React from 'react'
import styled from 'styled-components'
import { Title } from '../MyStyles/title'
import { Columns, Column } from '../MyStyles/Columns'

export default function(){
    return(
        <SeccionMisHabilidades>
            <Title>
                Mis Habilidades
            </Title>
            <Columns isMovil isGapples isMultiline style={{background: 'transparent'}}>
                <Column>
                    1
                </Column>
                <Column>
                    2
                </Column>
                <Column>
                    3
                </Column>yarn add react-pdf-viewer
                <Column>
                    4
                </Column>
            </Columns>
        </SeccionMisHabilidades>
    )
}

const SeccionMisHabilidades = styled.section`
    background: url(../image/skills-bg.jpg) no-repeat center;
    background-attachment: fixed;
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 3rem 1.5rem;
`