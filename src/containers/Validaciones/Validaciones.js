import React, { Component } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Validaciones.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import atras from '../../assets/atras.png';
import check from '../../assets/check.png';
import logo from '../../assets/logo.png';



export default class Validaciones extends Component {

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

                            <div class="">
                                <div class="">
                                    <h3>TU VOTO</h3>
                                    <br />
                                </div>
                                <div class="check">
                                    <img src={check} />
                                </div>
                                <br />

                                <h3>SE REGISTRÓ CORRECTAMENTE</h3>
                                <br />
                                <div class="texto">
                                <font color="red">IEFAZ</font> <font color="black">SOMOS</font> <font color="blue">TODOS</font>
                                </div>
                                <img src={logo} height="40px" align="right" />

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
                           
                        <div class="">
                                <div class="">
                                    <h4>TU VOTO</h4>
                                    <br />
                                </div>
                                <div id="check">
                                    <img src={check} />
                                </div>
                                <br />

                                <h4>SE REGISTRÓ CORRECTAMENTE</h4>
                                <br />
                                <div class="texto">
                                <font color="red">IEFAZ</font> <font color="black">SOMOS</font> <font color="blue">TODOS</font>
                                </div>

                            </div>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
