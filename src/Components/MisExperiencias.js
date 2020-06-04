import React from 'react'
import styled from 'styled-components'
import {Title} from './../MyStyles/title'
import CV2 from './CV2'
export default function(){
    return(
        <SeccionExperiencias>
            <Title>
                Mis Curriculum Vitae
            </Title>
           <CV2/>

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