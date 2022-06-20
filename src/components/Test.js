// import useFetch from "../hooks/useFetch";

// import { Container, Row, Col, ListGroup, Table } from 'react-bootstrap';

// // import Calendario from '../components/Calendario';
// // import ContentBox from '../components/content/ContentBox';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import SchoolIcon from '@mui/icons-material/School';
// // import { Circles } from 'react-loader-spinner';

// // import AccountBoxIcon from '@mui/icons-material/AccountBox';
// // import InfoIcon from '@mui/icons-material/Info';
// // import BuildIcon from '@mui/icons-material/Build';

// import { Circles } from 'react-loader-spinner';
// import TabTitle from './TabTitle';

// const Test = () => {

//     const alunoSelected = 1;

//     const { data: aluno, isPending, error } = useFetch("http://localhost:8000/alunos/" + alunoSelected);
//     const { data: materiasCadastradas, isPending: isPendingMaterias, error: errorMaterias } = useFetch("http://localhost:8000/materias");

//     if (aluno && materiasCadastradas) {
//         const { materias: alunoMaterias } = aluno;





//         const idsAluno = alunoMaterias.map((mat) => {
//             return mat.id
//         })

//         var materiasTem = materiasCadastradas.filter((item) =>
//             idsAluno.includes(item.id)
//         )

//         materiasTem.notas = alunoMaterias.map((mat) => {
//             return [mat.notas[0], mat.notas[1]]
//         })
//         console.log(materiasTem)


//     }



//     return (


//         <div className="border">
//             <TabTitle>Boletim</TabTitle>
//             {error && <div>Erro!!</div>}
//             {isPending && <div className='d-flex justify-content-around mt-5'><Circles height="250" width="250" color='#476b9e' ariaLabel='loading' /></div>}
//             {materiasTem && <Table striped hover responsive>
//                 <thead>
//                     <tr>
//                         <th>Matéria</th>
//                         <th>Professor</th>
//                         <th>Nota 1</th>
//                         <th>Nota 2</th>
//                         <th>Nota Final</th>
//                         <th>Frequência</th>
//                         <th>Situação</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {materiasTem && materiasTem.map((materia, index) => (
//                         <tr key={materia.id}>
//                             <th>{materia.nome}</th>
//                             <th>{materia.nomeProfessor}</th>
//                             <th>{ }</th>
//                             <th>{ }</th>
//                             <th>{(materia.notas[0] + materia.notas[1]) / 2}</th>
//                             <th>{materia.frequencia * 100}%</th>
//                             <th>{(((materia.nota1 + materia.nota2) / 2) >= 60) && materia.frequencia >= 0.75 ?
//                                 "Aprovado" : "Reprovado"}</th>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>}
//         </div>

//         // <div>
//         //     <h1 className="text-center mt-5 border-bottom">Painel do Aluno</h1>
//         //     <Container className="mt-5">
//         //         <Row>
//         //             <Col md="12" lg="6" className='border'>
//         //                 <AccountBoxIcon className="d-inline-block me-2" style={{ fontSize: "8rem" }} />
//         //                 <div className='d-inline-block align-top'>
//         //                     <h2>{ aluno.nomeCompleto}</h2>
//         //                     <h4>{ aluno.ano }</h4>
//         //                     <h4>Nº Matrícula: { aluno.id}</h4>
//         //                 </div>
//         //             </Col>
//         //             <Col md="12" lg="6" className='border'>
//         //                 <InfoIcon className="d-inline-block me-4" style={{ fontSize: "7rem" }} />

//         //                 <div className='d-inline-block align-top'>
//         //                     <h2>Informações</h2>
//         //                     <h4>Telefone: { aluno.telefone }</h4>
//         //                     <h4>Email: { aluno.email }</h4>
//         //                 </div>
//         //             </Col>
//         //         </Row>
//         //     </Container>

//         //     <div className='mt-5'>
//         //         <h1 className="text-center mt-5">Funções Disponíveis <BuildIcon style={{ fontSize: "4rem" }} /></h1>
//         //         <ListGroup className='text-center w-75 ms-auto me-auto lista'>
//         //             <ListGroup.Item>Acesso a matérias cadastradas</ListGroup.Item>
//         //             <ListGroup.Item>Consulta ao Boletim</ListGroup.Item>
//         //             <ListGroup.Item>Comunicação com o professor através do Fórum</ListGroup.Item>
//         //         </ListGroup>

//         //     </div>

//         // </div>


//         // <div>
//         //     <Container className='mt-5 border-bottom'>
//         //         <Row className='row align-items-start'>
//         //             <Col xs md="6">
//         //                 <h2 className='border-bottom text-start bg'><CalendarMonthIcon style={{ fontSize: "5rem" }} /> Agenda</h2>
//         //                 <Calendario />
//         //             </Col>

//         //             <Col xs sm="12" md="6">
//         //                 <h2 className='border-bottom text-end bg'>Aulas <SchoolIcon style={{ fontSize: "5rem" }} /></h2>
//         //                 {error && <div className='text-center text-danger display-6'>Falha ao Carregar Matéria</div>}
//         //                 {isPending && <div className='d-flex justify-content-around mt-5'><Circles height="250" width="250" color='#476b9e' ariaLabel='loading' /></div>}
//         //                 {materiasTem && <ContentBox content={materiasTem} title={""} shouldLink={true} />}
//         //             </Col>
//         //         </Row>

//         //     </Container>
//         // </div>
//     );
// }

// export default Test;