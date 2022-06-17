import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BookIcon from '@mui/icons-material/Book';

import { Container, Row, Col} from "react-bootstrap";
import ContentBox from "./ContentBox";


const Materia = () => {

    const { id } = useParams();

    const { data: materia, error, isPending } = useFetch('http://localhost:8000/materias/' + id);
    
    const atividades = [
        {
            id: 1,
            nome: "Atividade Fixação 1",
            nomeProfessor: "Exemplo de ativadade"
        },
        {
            id: 2,
            nome: "Atividade Fixação 2",
            nomeProfessor: "Exemplo de ativadade"
        }
    ];

    const provas = [
        {
            id: 1,
            nome: "Prova já realizada ✅",
            nomeProfessor: "Esta prova já foi enviada"
        },
        {
            id: 2,
            nome: "Prova não realizada ⌛",
            nomeProfessor: "Esta prova precisa ser enviada"
        },
        {
            id: 3,
            nome: "Prova Inválida ❌",
            nomeProfessor: "Tempo limite excedido"
        }
    ];

    return (
        <div className="caixa-materia mt-5 ">
            {isPending && <div>Carregando...</div>}
            {error && <div> {error} </div>}
            {materia && (
                <article className="">
                    <Container className="clearfix border-bottom ">
                        <Row className="w-50 float-start">
                            <Col xs sm="5" md="5" lg="3">
                                <BookIcon style={{fontSize: "7rem"}} />
                            </Col>
                            <Col xs sm="7" md="7" lg="8"> 
                                <h2 className="display-3">{materia.nome}</h2>
                                <p>Professor(a): {materia.nomeProfessor}</p>
                            </Col>
                        </Row>
                    </Container>


                    <Container className="mt-5">
                        <Row>
                            <Col > 
                                <ContentBox className="materia" content={atividades} title={"Atividades"} />
                            </Col>

                            <Col>
                                <ContentBox content={provas} title={"Provas"} />
                            </Col>
                        </Row>
                    </Container>
                    

                </article>
            )}




        </div>
    );
}

export default Materia;