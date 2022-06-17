import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Aulas from './pages/Aulas';

import { Container } from "react-bootstrap";
import Notas from './pages/Notas';
import Test from './components/Test';
import Materia from './components/Materia';

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
