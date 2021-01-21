import React, { useState } from 'react'
import BButton from "./../../components/BButton/BButton";
import Input from "./../../components/Input/Input";
import AlertBox from "./../../components/AlertBox/AlertBox";
import './formSafra.css'

const Formulario = ({ history }) => {
  const [nome, setNome] = useState('')
  // const [txtAno, setAno] = useState('')
  // const [erros, setErros] = useState([])

  // const sendRequest = () => {
  // console.log(txtNome, txtAno)
  // erros.push('Não foi enviado o request')
  // }

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
          {/* {erros.map(erro => <AlertBox
            label={erro}
          ></AlertBox>)} */}
          <form>
            <Input
              type="text"
              className="form-control"
              placeholder=""
              label="Nome: "
            // onChange={setNome}
            />
            <Input
              type="text"
              className="form-control"
              placeholder={`ex: ${new Date().getFullYear()}`}
              label="Ano: "
            // onChange={setAno}
            />
            <div className="mt10">
              <BButton label="Salvar" type="submit" ></BButton>
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