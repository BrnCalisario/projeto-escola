import { Table } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Oval } from 'react-loader-spinner';

const Boletim = () => {
    
    const { data: materias, isPending, error } = useFetch('http://localhost:8000/materias');

    return ( 
        <div>
            <h1 className="text-center text-light bg-dark bg-gradient py-2 mb-0">Seu Boletim</h1>
            {error && <div>Erro!!</div>}
            {isPending && <div className='d-flex justify-content-around mt-5'><Oval height="250" width="250" color='grey' ariaLabel='loading' /></div>}
            {materias && <Table striped borded hover responsive>
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
                        <tr>
                            <th>{materia.nome}</th>
                            <th>{materia.nomeProfessor}</th>
                            <th>{materia.nota1}</th>
                            <th>{materia.nota2}</th>
                            <th>{(materia.nota1 + materia.nota2) / 2}</th>
                            <th>{materia.frequencia * 100}%</th>
                            <th>{ (((materia.nota1 + materia.nota2) / 2) > 60) && materia.frequencia > 0.6 ? 
                                "Aprovado" : "Reprovado"}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>}
        </div>
    );
}
 
export default Boletim;