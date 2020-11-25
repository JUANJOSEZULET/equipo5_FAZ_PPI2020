import React, { Component } from 'react';
import './Menu.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import Gobierno from '../../assets/Gobierno.jpeg';
import Noticias from '../../assets/Noticias.jpeg';
import Deportes from '../../assets/Deportes.jpeg';
import Proyectos from '../../assets/Proyectos.jpeg';
import atras from '../../assets/atras.png';



export default class Menu extends Component {

    render() {
        return (
            <>

                <Breakpoint large up>
                    <nav className="navbar-wrapper">
                        <Breakpoint large up>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">

                                    <li className="sidebar-link-logo">
                                        <NavLink to="/">
                                            <img src={atras} alt="logo" />
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">


                            <div class="contenedor">
                                <NavLink to="/gobierno">
                                    <input type="image" src={Gobierno} class="boton" onclick="return display()" />
                                    <div class="centrado"><h2>GOBIERNO ESCOLAR</h2></div>
                                </NavLink>
                            </div>


                            <div class="contenedor2">
                                <NavLink to="/noticias">
                                    <input type="image" src={Noticias} class="boton2" onclick="return display()" />
                                    <div class="centrado2"><h2>NOTICIAS INSTITUCIONALES</h2></div>
                                </NavLink>
                            </div>

                            <div class="contenedor3">
                                <NavLink to="/deportes">
                                    <input type="image" src={Deportes} class="boton3" onclick="return display()" />
                                    <div class="centrado3"><h2>DEPORTES</h2></div>
                                </NavLink>
                            </div>

                            <div class="contenedor4">
                                <NavLink to="/proyectos">
                                    <input type="image" src={Proyectos} class="boton4" onclick="return display()" />
                                    <div class="centrado4"><h2>PROYECTOS INSTITUCIONALES</h2></div>
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
                                        <NavLink to="/">
                                            <img src={atras} alt="logo" />
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">

                            <div class="contenedor">
                                <NavLink to="/gobierno">
                                    <input type="image" src={Gobierno} class="boton" onclick="return display()" />
                                    <div class="centrado"><h4>GOBIERNO ESCOLAR</h4></div>
                                </NavLink>
                            </div>

                            <div class="contenedor2">
                                <NavLink to="/noticias">
                                    <input type="image" src={Noticias} class="boton2" onclick="return display()" />
                                    <div class="centrado2"><h4>NOTICIAS INSTITUCIONALES</h4></div>
                                </NavLink>
                            </div>

                            <div class="contenedor3">
                                <NavLink to="/deportes">
                                    <input type="image" src={Deportes} class="boton3" onclick="return display()" />
                                    <div class="centrado3"><h4>DEPORTES</h4></div>
                                </NavLink>
                            </div>

                            <div class="contenedor4">
                                <NavLink to="/proyectos">
                                    <input type="image" src={Proyectos} class="boton4" onclick="return display()" />
                                    <div class="centrado4"><h4>PROYECTOS INSTITUCIONALES</h4></div>
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
