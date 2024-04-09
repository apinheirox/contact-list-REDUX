import styled, { createGlobalStyle } from 'styled-components'

import bg from './bg.svg'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`

export default EstiloGlobal
