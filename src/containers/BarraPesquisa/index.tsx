import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const BarraPesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <div>
      <label htmlFor="nome">
        <BotaoAdicionar />
        <S.Input
          type="text"
          id="nome"
          placeholder="Pesquisar pelo nome..."
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
          autoComplete="off"
        ></S.Input>
      </label>
    </div>
  )
}

export default BarraPesquisa
