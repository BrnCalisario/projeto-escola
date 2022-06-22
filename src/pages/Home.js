import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';

import BuildIcon from '@mui/icons-material/Build';

import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <h1 className="text-center mt-5 border-bottom">Painel do Aluno</h1>
            <Container className="mt-5">
                <Row>
                    <Col md="12" lg="6" className='border'>
                        <AccountBoxIcon className="d-inline-block me-2" style={{ fontSize: "8rem" }} />
                        <div className='d-inline-block align-top'>
                            <h2>Renan Odoni</h2>
                            <h4>5º Ano</h4>
                            <h4>Nº Matrícula: 11420142946 </h4>
                        </div>
                    </Col>
                    <Col md="12" lg="6" className='border'>
                        <InfoIcon className="d-inline-block me-4" style={{ fontSize: "7rem" }} />

                        <div className='d-inline-block align-top'>
                            <h2 >Informações</h2>
                            <h4>Telefone: (41) 9999-9999</h4>
                            <h4>Email: renan.odoni@gmail.com</h4>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='mt-5 pt-5'> 
                <h1 className="text-center mt-5">Funções Disponíveis <BuildIcon style={{fontSize: "4rem"}}/></h1>
                <ListGroup className='text-center w-75 ms-auto me-auto lista'>
                    <ListGroup.Item>Acesso a matérias cadastradas</ListGroup.Item>
                    <ListGroup.Item>Consulta ao Boletim</ListGroup.Item>
                    <ListGroup.Item>Comunicação com o professor através do Fórum</ListGroup.Item>
                </ListGroup>

            </div>

        </div>

    );
}

export default Home;