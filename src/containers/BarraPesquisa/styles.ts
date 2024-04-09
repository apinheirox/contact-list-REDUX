import styled from 'styled-components'

export const Input = styled.input`
  height: 40px;
  width: 620px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: rgba(0, 0, 0, 0.07);

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
  }
`
