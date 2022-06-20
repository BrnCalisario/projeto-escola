import TabTitle from "../components/TabTitle";
import Table from 'react-bootstrap/esm/Table'
import { yellow } from "@mui/material/colors";

const Financeiro = () => {
    
    const pagamentos = [
        {
            "id": 1,
            "nomeAluno": "Pedro Henrique",
            "referencia": "06/2022",
            "valor": "R$ xxx,xx",
            "vencimento": "10/05/2022",
            "status": "Pendente",
        },
        {
            "id": 2,
            "nomeAluno": "Pedro Henrique",
            "referencia": "07/2022",
            "valor": "R$ xxx,xx",
            "vencimento": "10/07/2022",
            "status": "Pendente",
        },
        {
            "id": 3,
            "nomeAluno": "Pedro Henrique",
            "referencia": "08/2022",
            "valor": "R$ xxx,xx",
            "vencimento": "10/08/2022",
            "status": "Pendente",
        }
    ]
    
    function checkStatus(data) {
        
        let dateF = data.split("/");
        var dataAtual = new Date();
        var dataCheck = new Date(dateF[2], dateF[1], dateF[0]);
        
        let mesAtual = dataAtual.getMonth()
        let mesCheck = dataCheck.getMonth()

        if (mesCheck < mesAtual) {
            return "Vencido"
        }

        if(mesCheck > mesAtual) {
            return "Pendente"
        }

        let diaAtual = dataAtual.getDate()
        let diaCheck = dataCheck.getDate()

        if (diaAtual > diaCheck) {
            return "Vencido"
        }

        return "Pendente"
    }
    
    return (
        <div>
            <h1 className="text-center my-5 border-bottom">Financeiro</h1>

            <TabTitle>Meus Pagamentos</TabTitle>
            <Table hover responsive className="text-center">
                <thead>
                    <tr>
                        <td>Aluno</td>
                        <td>Referência</td>
                        <td>Valor</td>
                        <td>Vencimento</td>
                        <td>Status</td>
                        <td>Boleto</td>
                    </tr>
                </thead>

                <tbody>
                    {pagamentos.map((pag) => (
                        <tr key={pag.id}>
                            <th>{ pag.nomeAluno }</th>
                            <th>{ pag.referencia }</th>
                            <th>{ pag.valor }</th>
                            <th>{ pag.vencimento }</th>
                            <th>{ checkStatus(pag.vencimento) }</th>
                            <th><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" >Baixar</a></th>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div>
    );
}

export default Financeiro;