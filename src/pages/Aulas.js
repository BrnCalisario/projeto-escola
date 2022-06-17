import { Container, Row, Col } from 'react-bootstrap';

import Calendario from '../components/Calendario';
import ContentBox from '../components/ContentBox';
import useFetch from '../hooks/useFetch';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import { Circles } from 'react-loader-spinner';

const Aulas = () => {

    const { data: materias, isPending, error } = useFetch('http://localhost:8000/materias');
    
    return (

        <div>
            <Container className='mt-5 border-bottom'>
                <Row className='row align-items-start'>
                    <Col xs md="6">
                        <h2 className='border-bottom text-start bg'><CalendarMonthIcon style={{fontSize: "5rem"}}/> Agenda</h2>
                        <Calendario />
                    </Col>

                    <Col xs sm="12" md="6">
                        <h2 className='border-bottom text-end bg'>Aulas <SchoolIcon style={{fontSize: "5rem"}}/></h2>
                        {error && <div className='text-center text-danger display-6'>Falha ao Carregar Matéria</div>}
                        {isPending && <div className='d-flex justify-content-around mt-5'><Circles height="250" width="250" color='#476b9e' ariaLabel='loading' /></div>}
                        {materias && <ContentBox content={materias} title={""} shouldLink={true} />}
                    </Col>
                </Row>

            </Container>
        </div>
    )




}

export default Aulas;