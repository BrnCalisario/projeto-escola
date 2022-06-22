// Bootstrap
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";

import { LinkContainer } from 'react-router-bootstrap';
// Logo Image
import logo from '../../images/logo.png'

const NavbarResp = () => {
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

                    <LinkContainer to="/responsavel">
                        <Nav.Link className='link-light'>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/responsavel/aulas">
                        <Nav.Link className='link-light'>Aulas</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/responsavel/boletim'>
                        <Nav.Link className='link-light'>Boletim</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/responsavel/financeiro'>
                        <Nav.Link className='link-light'>Financeiro</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to='/responsavel/matricula'>
                        <Nav.Link className='link-light'>Matrícula</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/responsavel/forum'>
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

export default NavbarResp;