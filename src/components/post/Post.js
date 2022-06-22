import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import NavbarAluno from "../NavbarAluno";

const Post = () => {

    const { id } = useParams();

    const { data: post, error, isPending } = useFetch('http://localhost:8000/posts/' + id);

    return (

        <div>
            <NavbarAluno />
            <Container>
                <div className="w-50 mt-5 mx-auto ">
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
                </div>
            </Container>
        </div>
    );
}

export default Post;