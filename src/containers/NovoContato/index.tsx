import { FormEvent, useState } from 'react'
import { IoMdContact } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import variaveis from '../../styles/variaveis'
import { adicionar } from '../../store/reducers/contatos'

const NovoContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarNumero = (e: FormEvent) => {
    e.preventDefault()

    if (nome.trim().includes(' ')) {
      dispatch(
        adicionar({
          nomeContato: nome,
          numeroCelular: numero,
          emailContato: email
        })
      )
      navigate('/')
    } else {
      alert('Digite nome e sobrenome ou número válido')
    }
  }

  return (
    <S.ContainerNovoContato>
      <form onSubmit={cadastrarNumero}>
        <S.Titulo>Adicionar novo contato</S.Titulo>
        <IoMdContact
          style={{
            color: `${variaveis.azul}`,
            height: '150px',
            width: '150px',
            marginLeft: '115px'
          }}
        />
        <S.ContainerInputs>
          <S.Label htmlFor="nome">Nome e Sobrenome:</S.Label>
          <S.StyledInputMask
            mask=""
            type="text"
            id="nome"
            autoComplete="off"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
          <S.Label htmlFor="numero">Numero:</S.Label>
          <S.StyledInputMask
            mask="(99) 99999-9999"
            type="text"
            id="numero"
            autoComplete="off"
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
          />
          <S.Label htmlFor="email">Email:</S.Label>
          <S.StyledInputMask
            mask=""
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </S.ContainerInputs>
        <S.Botao type="submit">Adicionar</S.Botao>
      </form>
    </S.ContainerNovoContato>
  )
}

export default NovoContato
