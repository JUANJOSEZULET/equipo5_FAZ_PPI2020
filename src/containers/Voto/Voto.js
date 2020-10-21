import React, { Component } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Voto.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import atras from '../../assets/atras.png';
import personeros from '../../assets/personeros.jpeg';
import contraloria from '../../assets/contraloria.jpeg';



export default class Voto extends Component {

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
                                <NavLink to="/votopersoneria">
                                    <input type="image" src={personeros} class="boton" onclick="return display()" />
                                    <div class="centrado"><h5>PERSONERÍA</h5></div>
                                </NavLink>
                            </div>

                            <div class="contenedor2">
                                <NavLink to="/votocontraloria">

                                    <div class="contenedor2">
                                        <input type="image" src={contraloria} class="boton2" onclick="return display()" />
                                        <div class="centrado2"><h5>CONTRALORÍA</h5></div>
                                    </div>

                                </NavLink>
                            </div>
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
                                <NavLink to="/votopersoneria">
                                    <input type="image" src={personeros} class="boton" onclick="return display()" />
                                    <div class="centrado"><h5>PERSONERÍA</h5></div>
                                </NavLink>
                            </div>

                            <div class="contenedor2">
                                <NavLink to="/votocontraloria">

                                    <div class="contenedor2">
                                        <input type="image" src={contraloria} class="boton2" onclick="return display()" />
                                        <div class="centrado2"><h5>CONTRALORÍA</h5></div>
                                    </div>

                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
