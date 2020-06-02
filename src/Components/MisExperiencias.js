import React from 'react'
import styled from 'styled-components'
import {Title} from './../MyStyles/title'
export default function(){
    return(
        <SeccionExperiencias>
            <Title>
                Mis Experiencias
            </Title>
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
    padding: 3rem 1.5rem;
    @media screen and (min-width: 1024px){        
        padding: 18rem 1.5rem;
    }
`