import styled from 'styled-components'
import InputMask from 'react-input-mask'

import variaveis from '../../styles/variaveis'

export const ContainerNovoContato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 32px;
  color: ${variaveis.azul};
  margin-bottom: 24px;
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`

export const StyledInputMask = styled(InputMask)`
  width: 400px;
  height: 30px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: rgba(0, 0, 0, 0.07);
`

export const Label = styled.label`
  font-size: 12px;
  color: #6a6a6a;
`

export const Botao = styled.button`
  margin-top: 32px;
  width: 400px;
  height: 30px;
  border-radius: 8px;
  border: transparent;
  color: ${variaveis.azul};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${variaveis.azul};
    color: #fff;
  }
`
