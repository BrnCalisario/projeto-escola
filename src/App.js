import NavBarAluno from "./components/NavbarAluno";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/aluno/Home";
import Aulas from "./pages/aluno/Aulas";
import Forum from "./pages/aluno/ForumAluno";
import Boletim from "./pages/aluno/Boletim";

import { Container } from "react-bootstrap";

import Test from "./components/Test";
import Materia from "./components/Materia";
import Post from "./components/post/Post";
import CreatePost from "./components/post/CreatePost";
import Financeiro from "./pages/Financeiro";

import Dashboard from "./pages/professor/Dashboard";
import ForumAluno from "./pages/aluno/ForumAluno";
import Main from "./pages/Main";
import HomeResp from "./pages/responsavel/HomeResp";
import ForumResp from "./pages/responsavel/ForumResp"
import Matricula from "./pages/responsavel/Matricula";
import HomeSec from "./pages/secretaria/HomeSec";
import MatriculaSec from "./pages/secretaria/MatriculaSec";
import ForumSec from "./pages/secretaria/ForumSec";
import PostSec from "./pages/secretaria/PostSec";

function App() {
    return (
        <Router>
            <div className="App">
                {/* <Container id="content"> */}
                        <Switch>
                        
                        <Route exact path="/">
                            <Main />
                        </Route>


                        <Route exact path="/aluno">
                            <Home />
                        </Route>
                        <Route exact path="/aluno/aulas">
                            <Aulas />
                        </Route>
                        <Route path="/aluno/boletim">
                            <Boletim />
                        </Route>
                        <Route path="/aluno/materias/:id">
                            <Materia />
                        </Route>


                        <Route exact path="/responsavel">
                            <HomeResp />
                        </Route>
                        <Route exact path="/responsavel/matricula">
                            <Matricula />
                        </Route>
                        <Route exact path="/responsavel/financeiro">
                            <Financeiro />
                        </Route>
                        <Route exact path="/responsavel/forum">
                            <ForumResp />
                        </Route>


                        <Route exact path="/professor">
                            <Dashboard />
                        </Route>



                        <Route exact path="/secretaria">
                            <HomeSec />
                        </Route>
                        <Route exact path="/secretaria/matriculas">
                            <MatriculaSec />
                        </Route>
                        <Route exact path="/secretaria/forum">
                            <ForumSec />
                        </Route>
                        <Route path="/secretaria/forum/:id">
                            <PostSec />
                        </Route>


                        <Route path="/forum/:id">
                            <Post />
                        </Route>
                        <Route exact path="/forum">
                            <ForumAluno />
                        </Route>
                        <Route path="/novo-post">
                            <CreatePost />
                        </Route>




                        <Route path="/test">
                            <Test />
                        </Route>

                        </Switch>
                {/* </Container> */}
            </div>
        </Router>
    );
}

export default App;
