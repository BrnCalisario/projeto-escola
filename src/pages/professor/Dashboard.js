// import BuildIcon from '@mui/icons-material/Build';
import BoxAlunos from "../../components/content/BoxAlunos";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import NavBarProf from "./NavBarProf";
const Dashboard = () => {
    
    const alunos = [
        {
            "id": 1,
            "title": "João Magalhães",
            "body": "Situação: OK"
        },
        {
            "id": 2,
            "title": "Renan Odoni",
            "body": "Situação: Reprovado"
        },
        {
            "id": 3,
            "title": "Marilia Pereira",
            "body": "Situação: OK"
        }
    ]
    
    return (
        <div>
            <NavBarProf />
            <h1 className="text-center my-5 border-bottom">Dashboard Professor</h1>
            <Container id="content">
                <Row>
                    <Col>
                        <h3 style={{fontSize: "2.5rem"}}>Mauricio dos Santos</h3>
                        <h5 style={{fontSize: "1.5rem"}}>Disciplina: Português</h5>
                    </Col>
                    <Col>
                        <BoxAlunos contents={alunos} shouldLink={true} title={"Seus Alunos"} />
                    </Col>
                </Row>
            </Container>



            <div className='mt-2 py-5' style={{marginTop: 100}}> 
                <h1 className="text-center mt-5 py-5">Funções Disponíveis 
                {/* <BuildIcon style={{fontSize: "4rem"}}/> */}
                </h1>
                <ListGroup className='text-center w-75 ms-auto me-auto lista'>
                    <ListGroup.Item>Lançar notas do aluno</ListGroup.Item>
                    <ListGroup.Item>Postagem de materiais</ListGroup.Item>
                    <ListGroup.Item>Comunicação com os pais e alunos através do Fórum</ListGroup.Item>
                </ListGroup>
            </div>

            
        </div>


    );
}

export default Dashboard;