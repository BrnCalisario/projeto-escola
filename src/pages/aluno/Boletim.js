import { Table } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Circles } from 'react-loader-spinner';
import TabTitle from '../../components/TabTitle';

import {Container} from "react-bootstrap";
import NavbarAluno from '../../components/NavbarAluno';


const Boletim = () => {

    const { data: materias, isPending, error } = useFetch('http://localhost:8000/materias');

    return (
        <div>
            <NavbarAluno />
            <Container id="content">
                <div className="border mt-5">
                    <TabTitle>Boletim</TabTitle>
                    {error && <div>Erro!!</div>}
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
        </div>
    );
}

export default Boletim;