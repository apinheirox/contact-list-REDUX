import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contato from '../../components/Contato'
import * as S from './styles'

const ListaContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return contatos.filter(
      (contato) =>
        contato.nomeContato.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <>
      <S.Titulo>Clique no contato para editar ou remover</S.Titulo>
      <S.ContainerLista>
        {filtraTarefas().map((itens) => (
          <S.ListItem key={itens.idContato}>
            <Contato
              idContato={itens.idContato}
              nomeContato={itens.nomeContato}
              emailContato={itens.emailContato}
              numeroCelular={itens.numeroCelular}
            />
          </S.ListItem>
        ))}
      </S.ContainerLista>
    </>
  )
}

export default ListaContatos
