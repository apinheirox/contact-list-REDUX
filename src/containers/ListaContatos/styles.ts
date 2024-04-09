import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ListItem = styled.li`
  display: flex;
  width: 490px;
  margin-top: 30px;
`

export const Titulo = styled.h1`
  margin-top: 32px;
  color: ${variaveis.azulEscuro};
  font-size: 30px;
`

export const ContainerLista = styled.ul`
  height: 587px;
  width: 608px;
  overflow-y: scroll;

  /* Personalização da barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
    background-color: #fff; /* Cor do fundo da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${variaveis.azul}; /* Cor da alça da barra de rolagem */
    border-radius: 4px; /* Raio da alça da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${variaveis.azulEscuro}; /* Cor da alça da barra de rolagem ao passar o mouse */
  }
`
