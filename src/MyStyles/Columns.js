import styled from 'styled-components'

export const Columns = styled.div`
    flex:1;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    display: ${props=>props.isMovil ? 'flex':''};
    flex-wrap: ${props=>props.isMultiline ? 'wrap':''};
    margin: ${props=>props.isGapples ? '0':''};
    padding: ${props=>props.isGapples ? '0 !important':''};
    background-color: ${props=> props.BackgroundColor || 'white'};
`
export const Column=styled.div`

/* display: ${props=>props.isMovil ? 'flex':''}; */
    display: ${props=>props.isMovil ? 'flex':'block'};
    max-width: ${props=>!props.isContainer|| '1200px!important' };
    overflow: ${props=>!props.isContainer|| 'hidden' };
    flex:1;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
    flex: ${props=>props.porcentaje ? 'none': '1'};
    width: ${props=>props.porcentaje ? props.porcentaje : '100%'}%;

`