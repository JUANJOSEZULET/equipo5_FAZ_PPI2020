import React, { Component } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Proyectos.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import Gobierno from '../../assets/Gobierno.jpeg';
import Noticias from '../../assets/Noticias.jpeg';
import Deportes from '../../assets/Deportes.jpeg';
import atras from '../../assets/atras.png';
import bosquep from '../../assets/bosquep.jpeg';
import mediat from '../../assets/mediat.jpeg';



export default class Proyectos extends Component {

    render() {
        return (
            <>

                <Breakpoint large up>
                <nav className="navbar-wrapper">
                        <Breakpoint large up>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">


                                    <li className="sidebar-link-logo">
                                        <NavLink>
                                            <img src={atras} alt="logo" onClick={() => this.props.history.goBack()} />
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">
                        <div class="contenedor">
                            <NavLink to="/bosque">
                                <input type="image" src={bosquep} class="boton" onclick="return display()" />
                                <div class="centrado"><h5>VOS.¿QUÉ DE PALABRAS?</h5></div>
                                </NavLink>
                            </div>

                            <div class="contenedor2">
                            <NavLink to="/media">
                                <input type="image" src={mediat} class="boton2" onclick="return display()" />
                                <div class="centrado2"><h5>MEDIA TÉCNICA</h5></div>
                                </NavLink>
                            </div>

                            <NavLink to="/">
                                <div>


                                </div>
                            </NavLink>
                        </div>
                    </div>
                </Breakpoint>

                <Breakpoint small down>
                    <nav className="navbar-wrapper">
                        <Breakpoint small down>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">


                                    <li className="sidebar-link-logo">
                                        <NavLink>
                                            <img src={atras} alt="logo" onClick={() => this.props.history.goBack()} />
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">

                            <div class="contenedor">
                            <NavLink to="/bosque">
                                <input type="image" src={bosquep} class="boton" onclick="return display()" />
                                <div class="centrado"><h5>VOS.¿QUÉ DE PALABRAS?</h5></div>
                                </NavLink>
                            </div>

                            <div class="contenedor2">
                            <NavLink to="/media">
                                <input type="image" src={mediat} class="boton2" onclick="return display()" />
                                <div class="centrado2"><h5>MEDIA TÉCNICA</h5></div>
                                </NavLink>
                            </div>
                            <NavLink to="/">
                                <div>


                                </div>
                            </NavLink>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
