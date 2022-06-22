import { useState } from "react";
import { cpfMask } from "../../utils/mask"
import InputMask from 'react-input-mask';

// import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
import NavbarResp from "./NavbarResp";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";

const Matricula = () => {
    
    const anos = [];
    for (let i = 1; i <= 9; i++) {
        let ano = i + "º"
        anos.push(ano);
    }


    const history = useHistory();
    const [nomeC, setNomeC] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numEnd, setNumEnd] = useState('');
    const [anoLet, setAnoLet] = useState('5º');

    const handleSubmit = (e) => {
        e.preventDefault();
        const matricula = { nomeC, cpf, email, telefone, endereco, numEnd, anoLet, matriculado: false};
        console.log(matricula);

        fetch('http://localhost:8000/matriculas', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(matricula)
        }).then(() => {
            console.log("Matrícula Adicionada");
            alert("Solicitação de Matrícula enviada para a Secretaria")
            history.push('/responsavel');
        })

    }

    return (
        <div>
            <NavbarResp />
            <Container>
                <div className="create">
                    <h1 className="text-center my-5 border-bottom">Matrícula</h1>
                    <div className="w-75 mx-auto" style={{ fontSize: 20 }}>
                        <h2 className="text-secondary">Dados do Aluno</h2>
                        <div className="border p-4">
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="d-inline-block w-auto mx-1"
                                    placeholder="Nome Completo"
                                    required
                                    value={nomeC}
                                    onChange={e => setNomeC(e.target.value)}
                                ></input>
                                <input
                                    className="d-inline-block w-auto mx-1"
                                    maxLength='14'
                                    required
                                    name='cpf'
                                    value={cpf}
                                    placeholder='CPF'
                                    onChange={event => setCpf(cpfMask(event.target.value))}
                                ></input>
                                <div className="d-inline-block w-auto mx-1" >
                                    <label className="text-center text-secondary" style={{ fontSize: 18 }}>Data de Nascimento</label>
                                    <input className="mt-0" type="date"></input>
                                </div>
                                <input
                                    className="d-inline-block w-auto mx-1"
                                    size="20" placeholder="E-mail"
                                    value={email}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                ></input>
                                <InputMask
                                    className="d-inline-block w-auto mx-1"
                                    mask="+5\5 99 99999-9999"
                                    maskChar=" "
                                    placeholder="Telefone"
                                    value={telefone}
                                    required
                                    onChange={e => setTelefone(e.target.value)}
                                ></InputMask>
                                <input
                                    className="d-inline-block w-auto mx-1"
                                    placeholder="Endereço"
                                    value={endereco}
                                    required
                                    onChange={e => setEndereco(e.target.value)}
                                ></input>
                                <input
                                    className="d-inline-block w-auto mx-1"
                                    maxLength='3' size="3"
                                    placeholder="Nº"
                                    value={numEnd}
                                    required
                                    onChange={e => setNumEnd(e.target.value)}
                                ></input>

                                <div className="d-inline-block w-auto mx-1 my-3">
                                    <label className="d-inline-block text-center text-secondary" style={{ fontSize: 20 }}>Selecione o Ano Letivo Desejado</label>
                                    <select 
                                        className="d-inline-block  mx-1" 
                                        style={{ width: "3.5rem" }}
                                        value={anoLet}
                                        onChange={e => setAnoLet(e.target.value)}
                                    >
                                        {anos.map((ano) => {
                                            return <option>{ano}</option>
                                        })}
                                    </select>
                                </div>

                                <button className="mt-5">Matricular</button>
                                {/* <Button
                                    variant="contained"
                                    style={{
                                        borderRadius: 35,
                                        // backgroundColor: "#333",
                                        padding: "18px 36px",
                                        fontSize: "18px",
                                    }}
                                    // endIcon={<SendIcon />}
                                    className="title mt-5"
                                >
                                    Matricular
                                </Button> */}
                            </form>


                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Matricula;