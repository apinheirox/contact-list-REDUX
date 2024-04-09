import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { IoMdContact } from 'react-icons/io'

import ContatoClass from '../../models/Contato'
import * as S from './styles'
import variaveis from '../../styles/variaveis'
import { remover, editar } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  idContato,
  nomeContato: nomeContatoOriginal,
  emailContato: emailContatoOriginal,
  numeroCelular: numeroCelularOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [exibirInfos, setExibirInfos] = useState(false)
  const [exibirBotao, setExibirBotao] = useState(false)
  const [nomeContato, setNomeContato] = useState('')
  const [emailContato, setEmailContato] = useState('')
  const [numeroCelular, setNumeroCelular] = useState('')

  useEffect(() => {
    if (
      nomeContatoOriginal.length > 0 ||
      emailContatoOriginal.length > 0 ||
      numeroCelularOriginal.length > 0
    ) {
      setNomeContato(nomeContatoOriginal)
      setEmailContato(emailContatoOriginal)
      setNumeroCelular(numeroCelularOriginal)
    }
  }, [nomeContatoOriginal, emailContatoOriginal, numeroCelularOriginal])

  function handleClickBotao() {
    setExibirBotao(!exibirBotao)
  }

  function handleClickNumero() {
    if (!exibirInfos) {
      setExibirInfos(!exibirInfos)
      handleClickBotao()
    }
  }

  function OcultarInformacao() {
    setExibirInfos(false)
    setExibirBotao(false)
  }

  return (
    <>
      <div>
        <div>
          <S.Link onClick={handleClickNumero}>
            <IoMdContact
              style={{
                color: `${variaveis.azul}`,
                height: '45px',
                width: '45px'
              }}
            />
            <S.ContainerInfos>
              <S.Infos
                style={{ marginLeft: '32px' }}
                value={nomeContato}
                onChange={(e) => setNomeContato(e.target.value)}
              ></S.Infos>
              {exibirInfos && (
                <S.ContainerNumero>
                  <S.Infos
                    value={numeroCelular}
                    onChange={(e) => setNumeroCelular(e.target.value)}
                  ></S.Infos>
                  <S.Infos
                    value={emailContato}
                    onChange={(e) => setEmailContato(e.target.value)}
                  ></S.Infos>
                </S.ContainerNumero>
              )}
            </S.ContainerInfos>
            {exibirBotao && (
              <S.ContainerBotoes>
                <S.Botao
                  onClick={() => {
                    dispatch(
                      editar({
                        idContato,
                        nomeContato,
                        emailContato,
                        numeroCelular
                      })
                    )
                  }}
                >
                  Salvar
                </S.Botao>
                <S.Botao onClick={() => dispatch(dispatch(remover(idContato)))}>
                  Excluir
                </S.Botao>
                <S.Botao onClick={OcultarInformacao}>Voltar</S.Botao>
              </S.ContainerBotoes>
            )}
          </S.Link>
        </div>
      </div>
    </>
  )
}

export default Contato
