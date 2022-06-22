import NavbarSec from "./NavbarSec";
import { Container, Row, Col, ListGroup } from "react-bootstrap";


const HomeSec = () => {
    return (
        <div>
            <NavbarSec />
            <Container id="content">
                <h1 className="text-center mt-5 border-bottom">Painel da Secretaria</h1>

                <div className='mt-5 pt-5'>
                    <h2 className="text-center mt-5">Funções Disponíveis
                    </h2>
                    <ListGroup className='text-center w-75 ms-auto me-auto lista'>
                        <ListGroup.Item>Validação das Matrículas</ListGroup.Item>
                        <ListGroup.Item>Controle do Fórum</ListGroup.Item>
                    </ListGroup>

                </div>
            </Container>
        </div>
    );
}

export default HomeSec;