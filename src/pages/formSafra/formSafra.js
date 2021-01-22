import React, { useState } from 'react'
import api from '../../actions/apiAxios'
import BButton from "./../../components/BButton/BButton";
import Input from "./../../components/Input/Input";
import AlertBox from "./../../components/AlertBox/AlertBox";
import './formSafra.css'

function Formulario({ history }) {

  const [txtNome, setNome] = useState('')
  const [txtAno, setAno] = useState(0)
  const [erros, setErros] = useState([])

  const hundleNomeChange = (e) => {
    setNome(e.target.value)
  }

  const hundleAnoChange = (e) => {
    setAno(parseInt(e.target.value || 0))
  }

  const sendRequest = () => {
    setErros([])
    let errosAtuais = validation()
    setErros(errosAtuais)
    if (errosAtuais.length > 0) return
    MakeRequest()
    setErros(errosAtuais)
  }

  const MakeRequest = () => {
    api.post('/Safra',
      {
        Nome: txtNome,
        Ano: txtAno
      }, [])
      .then((response) => {
        const { success, msg } = response
        if (!success) errosAtuais.push(msg)
      })
  }

  const validation = () => {

    let erros = []

    if (!!!txtNome && !!!txtAno) {
      erros.push('A safra necessita de nome e ano')
      return erros
    }

    if (!!!txtNome) {
      erros.push('A safra necessita de nome')
    } else if (!!!txtAno || txtAno === 0) {
      erros.push('A safra necessita de ano')
    }

    return erros
  }

  return (
    <div>
      <div className="container">
        <div className="mt10">
          <BButton
            label="Voltar para Listagem"
            onClick={() => history.push('/')}
          ></BButton>
        </div>
      </div>
      <div className="boxColor">
        <div className="boxCenter">
          <h1>Safra</h1>
          {erros.map(erro => <AlertBox
            label={erro}
          ></AlertBox>)}
          <form>
            <Input
              type="text"
              className="form-control"
              placeholder=""
              label="Nome: "
              onChange={hundleNomeChange}
            />
            <Input
              type="text"
              className="form-control"
              placeholder={`ex: ${new Date().getFullYear()}`}
              label="Ano: "
              onChange={hundleAnoChange}
            />
            <div className="mt10">
              <BButton label="Salvar" onClick={() => sendRequest()} ></BButton>
              <BButton
                label="Limpar Campos"
                variant="secondary"
              ></BButton>
            </div >
          </form >
        </div >
      </div >
    </div >
  )
}

export default Formulario