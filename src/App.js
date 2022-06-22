import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Aulas from "./pages/Aulas";
import Matricula from "./pages/Matricula";

import { Container } from "react-bootstrap";
import Notas from "./pages/Notas";
import Forum from "./pages/Forum";
import Test from "./components/Test";
import Materia from "./components/Materia";
import Post from "./components/post/Post";
import CreatePost from "./components/post/CreatePost";
import Financeiro from "./pages/Financeiro";
import Dashboard from "./pages/Dashboard";


function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Container id="content">
                        <Switch>
                        
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/aulas">
                            <Aulas />
                        </Route>
                        <Route path="/boletim">
                            <Notas />
                        </Route>
                        <Route path="/materias/:id">
                            <Materia />
                        </Route>


                        <Route path="/responsavel/matricula">
                            <Matricula />
                        </Route>
                        <Route path="/responsavel/financeiro">
                            <Financeiro />
                        </Route>


                        <Route path="/professor/dashboard">
                            <Dashboard />
                        </Route>


                        <Route path="/forum/:id">
                            <Post />
                        </Route>
                        <Route exact path="/forum">
                            <Forum />
                        </Route>
                        <Route path="/novo-post">
                            <CreatePost />
                        </Route>




                        <Route path="/test">
                            <Test />
                        </Route>

                        </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;
