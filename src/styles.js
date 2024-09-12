import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   background-color: #CACAFA;

   display:flex;
   aling-items: center;
   justify-content: center;
`

export const Content =  styled.div`
    background-color: #CAFAFA;
    width: 90%;
    min-height: 350px;    
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-itesm: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itesm: center;
`