
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import NavbarAluno from '../../components/NavbarAluno';
import NavbarResp from "./NavbarResp";

const HomeResp = () => {
    return (
        <div>
            <NavbarResp />
            <Container id="content">
                <h1 className="text-center mt-5 border-bottom">Painel do Responsável</h1>
                <Container className="mt-5">
                    <Row className="info-row">
                        <Col md="12" lg="6" className='border'>
                            {/* <AccountBoxIcon className="d-inline-block me-2" style={{ fontSize: "8rem" }} /> */}
                            <div className='d-inline-block align-top'>
                                <h2>Responsável: Sérgio Mendes</h2>
                                <p>Dependentes: João Mendes, Maria Mendes</p>

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
                        <ListGroup.Item>Consulta ao Painel Financeiro</ListGroup.Item>
                        <ListGroup.Item>Realizar Matricula de aluno</ListGroup.Item>
                        <ListGroup.Item>Acesso ao Relatório dos dependentes</ListGroup.Item>
                    </ListGroup>

                </div>
            </Container>
        </div>
    );
}

export default HomeResp;
