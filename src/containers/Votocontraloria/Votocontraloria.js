import React, { Component } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Votocontraloria.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import atras from '../../assets/atras.png';
import G from '../../assets/G.png';
import V from '../../assets/V.png';



export default class Votocontraloria extends Component {

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
                            <section>
                                <div class="cuadrado">CONTRALORÍA</div>
                                <h4>TARJETÓN #10 </h4>
                                <div class="circular--portrait">
                                    <img src={G} />

                                </div>

                            </section>

                            <section>
                            <NavLink to="/validaciones">
                                    <button className="button1">Votar</button>
                                </NavLink>
                            </section>

                            <section>

                                <h4>TARJETÓN #20 </h4>
                                <div class="circular--portrait">
                                    <img src={V} />
                                </div>
                            </section>

                            <section>
                            <NavLink to="/validaciones">
                                    <button className="button1">Votar</button>
                                </NavLink>
                            </section>
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
                            <section>
                                <div class="cuadrado">CONTRALORÍA</div>
                                <h4>TARJETÓN #10 </h4>
                                <div class="circular--portrait">
                                    <img src={G} />

                                </div>

                            </section>

                            <section>
                            <NavLink to="/validaciones">
                                    <button className="button1">Votar</button>
                                </NavLink>
                            </section>

                            <section>

                                <h4>TARJETÓN #20 </h4>
                                <div class="circular--portrait">
                                    <img src={V} />
                                </div>
                            </section>

                            <section>
                            <NavLink to="/validaciones">
                                    <button className="button1">Votar</button>
                                </NavLink>
                            </section>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
