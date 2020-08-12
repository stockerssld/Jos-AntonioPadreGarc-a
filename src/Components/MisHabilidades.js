import React from 'react'
import styled from 'styled-components'
import { Title } from '../MyStyles/title'
import { Columns, Column } from '../MyStyles/Columns'
import {SeccionSeleccionableTabs,Tab} from './../MyStyles/Tabs'
import Tabs from './Tabs'
export default function(){
    return(
        <SeccionMisHabilidades id="Habilidades">
            <Title>
                Mis Habilidades
            </Title>
          <Tabs/>
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