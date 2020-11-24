import React, { Component } from 'react';
import './Gobierno.scss';
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import atras from '../../assets/atras.png';
import voto from '../../assets/voto.jpeg';
import candidatos from '../../assets/candidatos.jpeg';



export default class Gobierno extends Component {

    render() {
        return (
            <>

                <Breakpoint large up>
                    <nav className="navbar-wrapper">
                        <Breakpoint large up>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">


                                    <li className="sidebar-link-logo">
                                    <Link to="/Gobierno">
                                            <img src={atras} alt="logo"  />
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">
                            <div class="contenedor">
                                <Link to="/perfiles">
                                    <input type="image" src={candidatos} class="boton" onclick="return display()" />
                                    <div class="centrado"><h5>CANDIDATOS</h5></div>
                                </Link>
                            </div>

                            <div class="contenedor2">
                                <Link to="/voto">
                                    <input type="image" src= {voto} class="boton2" onclick="return display()" />
                                    <div class="centrado2"><h5>VOTO ONLINE</h5></div>
                                </Link>
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
                                    <Link to="/Menu">
                                            <img src={atras} alt="logo" />
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">
                        <div class="contenedor">
                                <Link to="/perfiles">
                                    <input type="image" src={candidatos} class="boton" onclick="return display()" />
                                    <div class="centrado"><h5>CANDIDATOS</h5></div>
                                </Link>
                            </div>

                            <div class="contenedor2">
                                <Link to="/voto">
                                    <input type="image" src={voto} class="boton2" onclick="return display()" />
                                    <div class="centrado2"><h5>VOTO ONLINE</h5></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
