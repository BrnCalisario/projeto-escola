import { LinkContainer } from "react-router-bootstrap";

import Nav from "react-bootstrap/Nav";
import logo from '../images/logo.png'
import { useState } from "react";
import { useHistory } from "react-router";

const Main = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const alunos = [
        {
            login: "aluno",
            pw: "0000"
        },
        {
            login: "renan01",
            pw: "0000"
        }
    ]

    const responsaveis = [
        {
            login: "responsavel",
            pw: "0000"
        },
        {
            login: "sergio01",
            pw: "0000"
        }
    ]

    const professores = [
        {
            login: "professor",
            pw: "0000"
        },
        {
            login: "Paulo Meneguel",
            pw: "0000"
        }
    ]

    const contas = [alunos, responsaveis]

    function checkUser(accountType, path) {

        if (!user || !password) {
            alert("Preencha todos os campos!");
            return
        }

        const inputUser = JSON.stringify({ login: user, pw: password })
        let isValid = false;

        accountType.forEach(conta => {
            conta = JSON.stringify(conta);
            if (conta === inputUser) {
                isValid = true;
            }
        });

        if (isValid) {
            alert("Seja bem-vindo " + user);
            history.push(path);
        } else {
            alert("Usuário ou Senha Inválidos")
        }
    }


    return (
        <div id="login-screen" className="text-light">
            <div id="login-content">
                <div className="mb-5">
                    <img
                        alt=""
                        src={logo}
                        width="200"
                        height="200"
                        className="d-inline-block align-center mb-4"
                    />
                    <h1 className="" style={{ fontSize: "60px" }}>Escola Negativo</h1>
                </div>
                <div>
                    <input
                        placeholder="Usuário"
                        className="d-block mx-auto my-1 border rounded-3"
                        style={{ fontSize: "28px" }}
                        value={user}
                        onChange={(e) => setUser(e.target.value)}>
                    </input>
                    <input
                        placeholder="Senha"
                        className="d-block mx-auto my-1 border rounded-3"
                        type="password"
                        style={{ fontSize: "28px" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <div className="mt-3">

                        <button
                            onClick={() => checkUser(alunos, "/aluno")}
                            className="mx-2"
                            style={{ background: "#6b3fd6", color: "#FFF", padding: "1rem" }} >
                            {/* <LinkContainer to="aluno">
                                <Nav.Link className='d-inline-block link-light'>Aluno</Nav.Link>
                            </LinkContainer> */}Aluno
                        </button>

                        <button
                            onClick={() => checkUser(responsaveis, "/responsavel")}
                            className="mx-2"
                            style={{ background: "#18b5b0", color: "#FFF", padding: "1rem" }}>
                            {/* <LinkContainer to="/responsavel/matricula">
                                <Nav.Link className='d-inline-block link-light'>Responsável</Nav.Link>
                            </LinkContainer> */}Responsável
                        </button>

                        <button
                            onClick={() => checkUser(professores, "/professor")}
                            className="mx-2"
                            style={{ background: "#ff934a", color: "#FFF", padding: "1rem" }}
                        >Professor
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Main;