import React from 'react'
import styled from 'styled-components'
export default function(){
    return(
        <SeccionContactame>
            <div style={{marginTop: '10%'}}>
            <Titulo>
            Póngase en contacto con migo.
            </Titulo>
            <br/>
            </div>
        </SeccionContactame>
    )
}
const SeccionContactame = styled.section`
    background: url(../image/achivements-bg.jpg) no-repeat center;
    background-attachment: fixed;
    flex:1%;
    margin: 2%;
    text-align: justify;
    display: block;
    user-select: none;
    padding: 3rem 1.5rem;
`

const Titulo=styled.p`
    text-align: center;
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    color: #2c3e50;
    letter-spacing: 2px;
`