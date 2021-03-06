import { Table } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Circles } from 'react-loader-spinner';
import TabTitle from '../../components/TabTitle';

import { Container } from "react-bootstrap";
import NavbarAluno from '../../components/NavbarAluno';
import NavbarResp from './NavbarResp';


const BoletimResp = () => {
    
    const { data: materias, isPending, error } = useFetch('http://localhost:8000/materias');
    
    return (
        <div>
            <NavbarResp />
            <Container id="content">
                <div className="border mt-5">
                    <TabTitle>Boletim do Dependente</TabTitle>
                    {error && <div className="display-2 text-danger text-center">Erro ao carregar boletim do Aluno</div>}
                    {isPending && <div className='d-flex justify-content-around mt-5'><Circles height="250" width="250" color='#476b9e' ariaLabel='loading' /></div>}
                    {materias && <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Matéria</th>
                                <th>Professor</th>
                                <th>Nota 1</th>
                                <th>Nota 2</th>
                                <th>Nota Final</th>
                                <th>Frequência</th>
                                <th>Situação</th>
                            </tr>
                        </thead>

                        <tbody>
                            {materias.map((materia) => (
                                <tr key={materia.id}>
                                    <th>{materia.nome}</th>
                                    <th>{materia.nomeProfessor}</th>
                                    <th>{materia.nota1}</th>
                                    <th>{materia.nota2}</th>
                                    <th>{(materia.nota1 + materia.nota2) / 2}</th>
                                    <th>{materia.frequencia * 100}%</th>
                                    <th>{(((materia.nota1 + materia.nota2) / 2) >= 60) && materia.frequencia >= 0.75 ?
                                        "Aprovado" : "Reprovado"}</th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}
                </div>
            </Container>
        </div>);
}

export default BoletimResp;