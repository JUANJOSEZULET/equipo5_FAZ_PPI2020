import React, { Component } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Deportes.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import deporte1 from '../../assets/deporte1.jpeg';
import atras from '../../assets/atras.png';



export default class Deportes extends Component {

    render() {
        return (
            <>

                <Breakpoint large up>
                    <div className="dashboard" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">

                            <div id="container">
                                <img src={deporte1} alt="" />
                            </div>
                            <div class="contenedor">
                                <div>
                                    <h4>Se declara la cancelación del torneo estudiantil</h4>

                                    <p>Oh no! Lo más trinado de todos los años a sido cancelado por el Covid-19,
                                    ¡Que terror! Y saber que apenas se estaba dando su apertura...
                                    Pero estudiantes no nos asustemos, de seguro el profesor Julio
                                    junto con el profesor Barela tendrán su propio "Plan B" para llevar a cabo
                                    esta actividad cuando volvamos al reinicio de las clases y se pueda llevar a cabo
                                    esta actividad que es amada por toda la institución. Ánimo! Y antes que nada,
                                    cuídense y cuiden a sus familiares!
                </p>
                                </div>

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
                                        <img src={atras} alt="logo"  onClick={() => this.props.history.goBack()} />
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">

                            <div id="container">
                                <img src={deporte1} alt="" />
                            </div>
                            <div class="contenedor">
                                <div >
                                    <h4>Se declara la cancelación del torneo estudiantil</h4>

                                    <p>Oh no! Lo más trinado de todos los años a sido cancelado por el Covid-19,
                                    ¡Que terror! Y saber que apenas se estaba dando su apertura...
                                    Pero estudiantes no nos asustemos, de seguro el profesor Julio
                                    junto con el profesor Barela tendrán su propio "Plan B" para llevar a cabo
                                    esta actividad cuando volvamos al reinicio de las clases y se pueda llevar a cabo
                                    esta actividad que es amada por toda la institución. Ánimo! Y antes que nada,
                                    cuídense y cuiden a sus familiares!
                </p>
                                </div>

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
