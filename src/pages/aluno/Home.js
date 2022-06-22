// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import InfoIcon from '@mui/icons-material/Info';

// import BuildIcon from '@mui/icons-material/Build';

import { Container, Row, Col, ListGroup } from "react-bootstrap";
import NavbarAluno from '../../components/NavbarAluno';

const Home = () => {
    return (
        <div>
            <NavbarAluno />
            <Container id="content">
            <h1 className="text-center mt-5 border-bottom">Painel do Aluno</h1>
            <Container className="mt-5">
                <Row className="info-row"> 
                    <Col md="12" lg="6" className='border'>
                        {/* <AccountBoxIcon className="d-inline-block me-2" style={{ fontSize: "8rem" }} /> */}
                        <div className='d-inline-block align-top'>
                            <h2>Nome: Renan Odoni</h2>
                            <p>Ano: 5º Ano</p>
                            <p>Nº Matrícula: 11420142946 </p>
                        </div>
                    </Col>
                    <Col md="12" lg="6" className='border'>
                        {/* <InfoIcon className="d-inline-block me-4" style={{ fontSize: "7rem" }} /> */}

                        <div className='d-inline-block align-top'>
                            <h2 >Informações</h2>
                            <p>Telefone: (41) 9999-9999</p>
                            <p>Email: renan.odoni@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='mt-5 pt-5'> 
                <h1 className="text-center mt-5">Funções Disponíveis
                 {/* <BuildIcon style={{fontSize: "4rem"}}/> */}
                 </h1>
                <ListGroup className='text-center w-75 ms-auto me-auto lista'>
                    <ListGroup.Item>Acesso a matérias cadastradas</ListGroup.Item>
                    <ListGroup.Item>Consulta ao Boletim</ListGroup.Item>
                    <ListGroup.Item>Comunicação com o professor através do Fórum</ListGroup.Item>
                </ListGroup>

            </div>
            </Container>
        </div>

    );
}

export default Home;