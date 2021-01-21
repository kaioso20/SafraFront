import './listSafra.css'
import BButton from '../../components/BButton/BButton'
import CardUser from '../../components/CardUser/CardUser'

const safrasFake = [
    { nome: 'Safra 01', ano: 2021, idSafra: 1 },
    { nome: 'Safra 02', ano: 2018, idSafra: 2 },
    { nome: 'Safra 03', ano: 2020, idSafra: 3 },
]

function ListSafra({history}) {
    return (
        <div>
            <div className="container">
                <div className="mt10">
                        <BButton
                            label="Cadastrar Novo Usuário"
                            onClick={() => history.push('/cadastro')}
                        />
                </div>
                {safrasFake.map(eachSafra => <CardUser key={eachSafra.idSafra} safra={eachSafra} ></CardUser>)}
            </div >
        </div >
    )
}

export default ListSafra