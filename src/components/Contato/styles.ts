import styled from 'styled-components'

import variaveis from '../../styles/variaveis'

export const Link = styled.a`
  display: flex;
  align-items: center;
  width: 557px;
  margin-left: 30px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    cursor: pointer;
  }
`
export const ContainerInfos = styled.div`
  width: 260px;
`

export const Infos = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  border: none;
  resize: none;
  background-color: transparent;
`

export const Botao = styled.button`
  background-color: ${variaveis.azul};
  border-radius: 4px;
  border: transparent;
  margin-left: 8px;
  padding: 8px;
  color: #fff;

  &:hover {
    background-color: ${variaveis.azulEscuro};
    cursor: pointer;
  }
`

export const ContainerBotoes = styled.div`
  display: flex;
  margin-left: 40px;

  ${Botao}:nth-child(2) {
    background-color: ${variaveis.vermelho};

    &:hover {
      background-color: ${variaveis.vermelhoEscuro};
    }
  }

  ${Botao}:nth-child(3) {
    background-color: ${variaveis.cinza};

    &:hover {
      background-color: ${variaveis.cinzaEscuro};
    }
  }
`

export const ContainerNumero = styled.div`
  margin-left: 32px;
`
