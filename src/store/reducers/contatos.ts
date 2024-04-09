import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  contatos: Contato[]
}

const initialState: ContatoState = {
  contatos: [
    {
      idContato: 1,
      nomeContato: 'Gabriel Alves',
      emailContato: 'gabrielalvesqm@gmail.com',
      numeroCelular: '(84)99193-7644'
    },
    {
      idContato: 2,
      nomeContato: 'Joao Silva',
      emailContato: 'Joaozinhodasalva@hotmail.com',
      numeroCelular: '(84)99184-3465'
    },
    {
      idContato: 3,
      nomeContato: 'Felipe Tavares',
      emailContato: 'Felipet1010@outlook.com',
      numeroCelular: '(84)99172-8675'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'idContato'>>) => {
      //Consigo omitir o id gerado
      const contatoJaExiste = state.contatos.find(
        (contato) =>
          contato.numeroCelular.replace(/\D/g, '') ===
          action.payload.numeroCelular.replace(/\D/g, '')
      )

      if (contatoJaExiste) {
        alert('Ja existe um contato com esse número de celular')
      } else {
        const ultimoContatoDaLista = state.contatos[state.contatos.length - 1]

        const novoContato = {
          ...action.payload,
          idContato: ultimoContatoDaLista
            ? ultimoContatoDaLista.idContato + 1
            : 1
        }

        state.contatos.push(novoContato)
      }
      console.log(state.contatos)
    },
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = [
        ...state.contatos.filter(
          (contato) => contato.idContato !== action.payload
        )
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.contatos.findIndex(
        (contato) => contato.idContato === action.payload.idContato
      )

      if (indexDoContato > 0) {
        state.contatos[indexDoContato] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatoSlice.actions

export default contatoSlice.reducer
