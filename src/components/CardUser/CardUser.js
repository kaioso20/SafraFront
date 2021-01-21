import Card from 'react-bootstrap/Card';
import BButton from "../../components/BButton/BButton";
import './CardUser.css'

function CardUser({ safra }) {
    return (
        <div>
            <Card className='eachCard'>
                <Card.Header className='titleCard'>
                    <Card.Title>{safra.nome}</Card.Title>
                    <Card.Subtitle className="montserrat300I">Identificador: <b>{safra.idSafra}</b></Card.Subtitle>
                    <Card.Subtitle className="montserrat300I">Ano: <b>{safra.ano}</b></Card.Subtitle>
                </Card.Header>
                <Card.Footer>
                    <BButton
                        label="Editar Safra"
                        variant="info"
                        onClick={() => console.log(1)}
                    ></BButton>
                    <BButton
                        label="Remover Safra"
                        variant="danger"
                        onClick={() => console.log(2)}
                    ></BButton>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default CardUser