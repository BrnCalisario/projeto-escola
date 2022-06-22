import NavbarSec from "./NavbarSec";

import Button from "@mui/material/Button";

import TabTitle from '../../components/TabTitle';
import Table from 'react-bootstrap/esm/Table';

import { useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import NavbarAluno from '../../components/NavbarAluno';


const ForumSec = () => {
   
   
    const { data: posts, error, isPending } = useFetch('http://localhost:8000/posts');

    const history = useHistory();
    const handleRowClick = (id) => {
        history.push('/secretaria/forum/' + id);
    }

   
    return (
        <div>
            <NavbarSec />
            <Container id="content">
                <h1 className="text-center my-5 border-bottom">
                    {/* <ForumIcon style={{ fontSize: "4rem" }} />  */}
                    Fórum</h1>
                <div className="mt-5 w-75 ms-auto me-auto border">
                    <TabTitle >Postagens</TabTitle>

                    <Table hover responsive className="text-center">
                        <thead>
                            <tr>
                                <th>Autor</th>
                                <th>Assunto</th>
                                <th>Data</th>
                            </tr>
                        </thead>

                        <tbody>
                            {error && <div>Erro</div>}
                            {posts && posts.map((post) => (
                                <tr onClick={() => handleRowClick(post.id)} key={post.id}>
                                    <th>{post.autor}</th>
                                    <th>{post.assunto}</th>
                                    <th>{post.data}</th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <div className='w-75 mx-auto text-end mt-5 materia'>
                    <Link to='/novo-post'>
                        <Button
                            variant="contained"
                            style={{
                                borderRadius: 35,
                                // backgroundColor: "#333",
                                padding: "18px 36px",
                                fontSize: "18px",
                            }}
                            // endIcon={<AddIcon />}
                            className="title"
                        >
                            Nova Postagem
                        </Button>
                    </Link>
                </div>



            </Container>
        </div>
    );
}

export default ForumSec;
