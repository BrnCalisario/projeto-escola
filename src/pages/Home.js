import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';

import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <h1 className="text-center mt-5 border-bottom">Painel do Aluno</h1>

            {/* <div className='clearfix mt-5 border'>
                <AccountBoxIcon className="d-inline-block me-2" style={{ fontSize: "8rem" }} />
                <div className='d-inline-block align-top'>
                    <h2>Renan Odoni</h2>
                    <h4>5º Ano</h4>
                    <h4>Nº Matrícula: 11420142946 </h4>
                </div>
            </div>

            <div className='mt-5 border'>
                <InfoIcon className="d-inline-block me-4" style={{ fontSize: "7rem" }} />

                <div className='d-inline-block align-top'>
                    <h2 >Informações</h2>
                    <h4>Telefone: (41) 9999-9999</h4>
                    <h4>Email: renan.odoni@gmail.com</h4>
                </div>
            </div> */}

            <Container className="mt-5">
                <Row>
                    <Col sx md="12" lg="6" className='border'>
                        <AccountBoxIcon className="d-inline-block me-2" style={{ fontSize: "8rem" }} />
                        <div className='d-inline-block align-top'>
                            <h2>Renan Odoni</h2>
                            <h4>5º Ano</h4>
                            <h4>Nº Matrícula: 11420142946 </h4>
                        </div>
                    </Col>
                    <Col sx md="12" lg="6" className='border'>
                        <InfoIcon className="d-inline-block me-4" style={{ fontSize: "7rem" }} />

                        <div className='d-inline-block align-top'>
                            <h2 >Informações</h2>
                            <h4>Telefone: (41) 9999-9999</h4>
                            <h4>Email: renan.odoni@gmail.com</h4>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default Home;