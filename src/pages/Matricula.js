import { useState } from "react";
import { cpfMask } from "../utils/mask"
import InputMask from 'react-input-mask';

import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";

const Matricula = () => {

    const [cpf, setCpf] = useState("");

    const anos = [];
    for (let i = 1; i <= 9; i++) {
        let ano = i + "º"
        anos.push(ano);
    }

    return (
        <div className="create">
            <h1 className="text-center my-5 border-bottom">Matrícula</h1>
            <div className="w-75 mx-auto" style={{ fontSize: 20 }}>
                <h2 className="text-secondary">Dados do Aluno</h2>
                <div className="border p-4">
                    <input className="d-inline-block w-auto mx-1" placeholder="Nome Completo"></input>
                    <input
                        className="d-inline-block w-auto mx-1"
                        maxLength='14'
                        name='cpf'
                        value={cpf}
                        placeholder='CPF'
                        onChange={event => setCpf(cpfMask(event.target.value))}
                    ></input>
                    <div className="d-inline-block w-auto mx-1" >
                        <label className="text-center text-secondary" style={{ fontSize: 18 }}>Data de Nascimento</label>
                        <input className="mt-0" type="date"></input>
                    </div>
                    <input className="d-inline-block w-auto mx-1" size="20" placeholder="E-mail"></input>
                    <InputMask
                        className="d-inline-block w-auto mx-1"
                        mask="+5\5 99 99999-9999"
                        maskChar=" "
                        placeholder="Telefone"
                    ></InputMask>
                    <input className="d-inline-block w-auto mx-1" placeholder="Endereço"></input>
                    <input className="d-inline-block w-auto mx-1" maxLength='3' size="3" placeholder="Nº"></input>

                    <div className="d-inline-block w-auto mx-1 my-3">
                        <label className="d-inline-block text-center text-secondary" style={{ fontSize: 20 }}>Selecione o Ano Letivo Desejado</label>
                        <select className="d-inline-block  mx-1" style={{ width: "3.5rem" }}>
                            {anos.map((ano) => {
                                return <option>{ano}</option>
                            })}
                        </select>
                    </div>
                </div>

                <Button
                    variant="contained"
                    style={{
                        borderRadius: 35,
                        // backgroundColor: "#333",
                        padding: "18px 36px",
                        fontSize: "18px",
                    }}
                    endIcon={<SendIcon />}
                    className="title mt-5"
                >
                    Matricular
                </Button>
            </div>
        </div>
    );
}

export default Matricula;