import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";

// Logo Image
import logo from '../images/logo.png'

const NavbarAluno = () => {
    return (
        <Navbar expand="lg" className="my-navbar py-2">
            <Container>
                <Navbar.Brand id="logo-title" className="text-light" href="/">
                    <img
                        alt=""
                        src={logo}
                        width="75"
                        height="75"
                        className="d-inline-block align-center"
                    />
                    Escola Negativo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-center mx-2">

                    <LinkContainer to="/aluno">
                        <Nav.Link className='link-light'>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/aluno/aulas">
                        <Nav.Link className='link-light'>Aulas</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/aluno/boletim'>
                        <Nav.Link className='link-light'>Boletim</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/forum'>
                        <Nav.Link className='link-light'>Fórum</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/'>
                        <Nav.Link className='link-light'>Sair</Nav.Link>
                    </LinkContainer>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarAluno;
