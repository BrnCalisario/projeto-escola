import { Container, Row, Col} from 'react-bootstrap';

import Calendario from '../components/Calendario';
import ContentBox from '../components/ContentBox';
import useFetch from '../hooks/useFetch';


const Aulas = () => {

    const { data: materias, isPending, error } = useFetch('http://localhost:8000/materias');
    const { data: extras, isPending: pendingEx, error: errorEx } = useFetch('http://localhost:8000/atividadesExtra');

    return (
        <Container className='mt-5'>
            <Row className='row align-items-start'>
                <Col xs md="6">
                    <h2 className='border-bottom text-center bg'>Agenda</h2>
                    <Calendario />
                </Col>

                <Col xs sm="12" md="6">
                    { error && <div className='text-center text-danger display-6'>Falha ao Carregar Matéria</div>}
                    { isPending && <div className='text-center text-info display-6'>Carregando Matérias...</div>}
                    {materias && <ContentBox content={ materias }/>}
                </Col>
            </Row>
            <Row className='py-5'>
                <Col xs={{offset: 6}}>
                    { errorEx && <div className='text-center text-danger display-6'>Falha ao Carregar Matéria</div>}
                    { extras && <ContentBox content={ extras } />}
                </Col>
            </Row>
            
        </Container>
    )


    

}

export default Aulas;