import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { BreakpointProvider } from 'react-socks';
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import Menu from './containers/Menu/Menu';
import Header from './containers/Header/Header';
import Noticias from './containers/Noticias/Noticias';
import Bosque from './containers/Bosque/Bosque';
import './App.css';
import Deportes from './containers/Deportes/Deportes';
import Proyectos from './containers/Proyectos/Proyectos';
import Media from './containers/Media/Media';
import Gobierno from './containers/Gobierno/Gobierno';
import Personeria from './containers/Personeria/Personeria';
import Contraloria from './containers/Contraloria/Contraloria';
import Perfiles from './containers/Perfiles/Perfiles';
import Voto from './containers/Voto/Voto';
import Votopersoneria from './containers/Votopersoneria/Votopersoneria';
import Votocontraloria from './containers/Votocontraloria/Votocontraloria';
import Validaciones from './containers/Validaciones/Validaciones';


function App() {
    return (
        <BreakpointProvider>
            <div className="App">
                <Router>
                    <LastLocationProvider>

                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/menu" component={Menu} />
                            <Route exact path="/noticias" component={Noticias} />
                            <Route exact path="/deportes" component={Deportes} />
                            <Route exact path="/proyectos" component={Proyectos} />
                            <Route exact path="/bosque" component={Bosque} />
                            <Route exact path="/media" component={Media} />
                            <Route exact path="/gobierno" component={Gobierno} />
                            <Route exact path="/personeria" component={Personeria} />
                            <Route exact path="/contraloria" component={Contraloria} />
                            <Route exact path="/perfiles" component={Perfiles} />
                            <Route exact path="/voto" component={Voto} />
                            <Route exact path="/votopersoneria" component={Votopersoneria} />
                            <Route exact path="/votocontraloria" component={Votocontraloria} />
                            <Route exact path="/validaciones" component={Validaciones} />

                        </Switch>
                    </LastLocationProvider>
                </Router>
            </div>
        </BreakpointProvider>
    );
}

export default App;
