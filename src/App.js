import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Aulas from './pages/Aulas';

import { Container } from "react-bootstrap";
import Notas from './pages/Notas';

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
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;
