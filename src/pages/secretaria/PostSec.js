import { Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import NavbarSec from "./NavbarSec";

const PostSec = () => {

    const { id } = useParams();

    const { data: post, error, isPending } = useFetch('http://localhost:8000/posts/' + id);

    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/posts/' + [post.id], {
            method: 'DELETE',
        }).then(() => {
            history.push("/secretaria/forum");
        })
    }


    return (



        <div>
            <NavbarSec />
            <Container>
                <div className="w-50 mt-5 mx-auto ">
                    {isPending && <div>carregando</div>}
                    {error && <div>FUDEU</div>}
                    {post &&
                        <div>
                            <h1 className="mb-3 pb-2 border-bottom"> {post.assunto}</h1>

                            <div className="d-flex post-info">
                                <p>Autor: {post.autor}</p>
                                <p className="ms-auto">{post.data}</p>
                            </div>
                            <p className="border rounded p-3">{post.conteudo} </p>
                        </div>
                    }
                    <button style={{float: "right", clear: "both"}} onClick={handleClick}>Apagar</button>
                </div>

                
            </Container>
        </div>
    );
}

export default PostSec;