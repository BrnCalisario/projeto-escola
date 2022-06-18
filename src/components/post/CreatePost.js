import { useState } from "react";
import { useHistory } from "react-router";


import CreateIcon from '@mui/icons-material/Create';
import SendIcon from '@mui/icons-material/Send';

function formataData() {
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}


const CreatePost = () => {





    // Assunto, Conteudo , Autor e Data
    const [assunto, setAssunto] = useState('');
    const [body, setBody] = useState('');
    const [autor, setAutor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [data, setDate] = useState(formataData())

    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();
        const post = { autor, assunto, conteudo: body, data };
        console.log(post);

        setIsPending(true);

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('Novo post adicionado');
            setIsPending(false);
            history.push('/forum');
        })

    }

    return (
        <div className="create w-50 mx-auto">
            <h1 className="text-center my-5 border-bottom"> Nova Postagem <CreateIcon style={{ fontSize: "3.5rem" }} />  </h1>

            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    required
                    placeholder='Assunto'
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                ></input>
                <textarea
                    type="text"
                    required
                    placeholder='Insira o conteúdo da postagem'
                    rows="8"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <input
                    type="text"
                    required
                    placeholder='Autor'
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                ></input>
                <button className=''>Adicionar Postagem  <SendIcon /> </button>
            </form>

        </div>
    );
}

export default CreatePost;