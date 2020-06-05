import React from 'react'
import styled from 'styled-components'
import {Title} from './../MyStyles/title'
import CV2 from './CV2'
import { Columns } from '../MyStyles/Columns'
export default function(){
    return(
        <SeccionExperiencias id="CurriculumJAPG">
            <Columns>
            <Title  id="CurriculumJAPG">
                Mis Curriculum Vitae
            </Title>
           <CV2/>
           </Columns>

        </SeccionExperiencias>
    )
}

export const SeccionExperiencias=styled.div`
    display:flex;
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 1rem 1.5rem;
    @media screen and (min-width: 1024px){        
        padding: 10px 1.5rem;
    }
`