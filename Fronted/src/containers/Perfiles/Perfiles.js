import React, { Component } from 'react';
import './Perfiles.scss';
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import Gobierno from '../../assets/Gobierno.jpeg';
import Noticias from '../../assets/Noticias.jpeg';
import Deportes from '../../assets/Deportes.jpeg';
import atras from '../../assets/atras.png';
import contraloría from '../../assets/contraloría.jpeg';
import personeria from '../../assets/personeria.jpeg';



export default class Perfiles extends Component {

    render() {
        return (
            <>

                <Breakpoint large up>
                <nav className="navbar-wrapper">
                        <Breakpoint large up>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">


                                    <li className="sidebar-link-logo">
                                        <Link>
                                            <img src={atras} alt="logo" onClick={() => this.props.history.goBack()} />
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">
                        <div class="contenedor">
                            <Link to="/personeria">
                                <input type="image" src={personeria} class="boton" onclick="return display()" />
                                <div class="centrado"><h5>PERSONERÍA</h5></div>
                                </Link>
                            </div>

                            <div class="contenedor2">
                            <Link to="/contraloria">
                                <input type="image" src={contraloría} class="boton2" onclick="return display()" />
                                <div class="centrado2"><h5>CONTRALORÍA</h5></div>
                                </Link>
                            </div>

                            <Link to="/">
                                <div>


                                </div>
                            </Link>
                        </div>
                    </div>
                </Breakpoint>

                <Breakpoint small down>
                    <nav className="navbar-wrapper">
                        <Breakpoint small down>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">


                                    <li className="sidebar-link-logo">
                                        <Link>
                                            <img src={atras} alt="logo" onClick={() => this.props.history.goBack()} />
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">

                            <div class="contenedor">
                            <Link to="/personeria">
                            <input type="image" src={personeria} class="boton" onclick="return display()" />
                                <div class="centrado"><h5>PERSONERÍA</h5></div>
                                </Link>
                            </div>

                            <div class="contenedor2">
                            <Link to="/contraloria">
                            <input type="image" src={contraloría} class="boton2" onclick="return display()" />
                                <div class="centrado2"><h5>CONTRALORÍA</h5></div>
                                </Link>
                            </div>
                            <Link to="/">
                                <div>


                                </div>
                            </Link>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
