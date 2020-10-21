import React, { Component } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Votopersoneria.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import atras from '../../assets/atras.png';
import J from '../../assets/J.png';
import M from '../../assets/M.png';
import S from '../../assets/S.png';







export default class Votopersoneria extends Component {

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
                                <div class="cuadrado">PERSONERÍA</div>
                                <h4>TARJETÓN #01 </h4>
                                <div class="circular--portrait">
                                    <img src={J} />

                                </div>

                            </section>

                            <section>
                                <NavLink to="/validaciones">
                                    <button className="button1">Votar</button>
                                </NavLink>
                            </section>

                            <section>

                                <h4>TARJETÓN #02 </h4>
                                <div class="circular--portrait">
                                    <img src={M} />
                                </div>
                            </section>

                            <section>
                            <NavLink to="/validaciones">
                                    <button className="button1">Votar</button>
                                </NavLink>
                            </section>

                            <section>
                                <h4>TARJETÓN #3 </h4>
                                <div class="circular--portrait">
                                    <img src={S} />
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
                                <div class="cuadrado">PERSONERÍA</div>
                                <h4>TARJETÓN #01 </h4>
                                <div class="circular--portrait">
                                    <img src={J} />

                                </div>

                            </section>

                            <section>
                            <NavLink to="/validaciones">
                                    <button className="button1">Votar</button>
                                </NavLink>
                            </section>

                            <section>

                                <h4>TARJETÓN #02 </h4>
                                <div class="circular--portrait">
                                    <img src={M} />
                                </div>
                            </section>

                            <section>
                            <NavLink to="/validaciones">
                                    <button className="button1">Votar</button>
                                </NavLink>
                            </section>

                            <section>
                                <h4>TARJETÓN #3 </h4>
                                <div class="circular--portrait">
                                    <img src={S} />
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
