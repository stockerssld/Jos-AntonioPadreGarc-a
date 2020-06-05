import styled from 'styled-components'

export const Tabs = styled.div`
    align-items: stretch;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    user-select: none;
`

export const SeccionSeleccionableTabs=styled.ul`
 align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
`
export const Tab = styled.li`
    display: block;
`