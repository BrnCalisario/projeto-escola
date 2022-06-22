import { Container } from "react-bootstrap";
import TabTitle from "../../components/TabTitle";
import useFetch from "../../hooks/useFetch";
import NavbarSec from "./NavbarSec";
import { Circles } from 'react-loader-spinner';
import { Table } from 'react-bootstrap';
import { useState } from "react";
import { set } from "date-fns/esm";

const MatriculaSec = () => {

    const { data: matriculas, isPending, error } = useFetch('http://localhost:8000/matriculas');

 
    function handleSubmit(e) {
        e.preventDefault();
    }

    function deleteRow (idMatricula)  {
        this.setState(prevState => ({
            matriculas: prevState.matriculas.filter(el => el.id !== idMatricula)
        }))
    }

    return (



        <div>
            <NavbarSec />
            <Container id="content">
                {/* <h1 className='border-bottom text-center my-5 pb-2 bg'>Matrículas Pendentes</h1> */}

                <div className="my-5 pb-2 w-75 mx-auto" >
                    <TabTitle>Matrículas Pendentes</TabTitle>
                    {error && <div className="display-2 text-danger text-center">Falha ao Carregar Matriculas</div>}
                    {isPending && <div className="d-flex justify-content-around mt-5"><Circles height="250" width="250" color='#476b9e' ariaLabel='loading' /></div>}
                    {matriculas &&
                        <form onSubmit={e => handleSubmit(e)}>
                            <Table striped hover responsive className="text-center">
                                <thead>
                                    <tr>
                                        <th>Nº Processo</th>
                                        <th>Nome Aluno</th>
                                        <th>CPF</th>

                                        <th>Aprovar</th>
                                        {/* <th>Recusar</th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    {matriculas.map((matricula) => (
                                        <tr key={matricula.id}>
                                            <th>{matricula.id}</th>
                                            <th>{matricula.nomeC} </th>
                                            <th>{matricula.cpf}</th>
                                            <th><input type="checkbox"></input></th>
                                        </tr>
                                    ))}
                                </tbody>

                            </Table>
                            <button className="" style={{float: "right", clear: "both"}}>Proceder</button>
                        </form>}

                </div>

            </Container>

        </div>
    );
}

export default MatriculaSec;