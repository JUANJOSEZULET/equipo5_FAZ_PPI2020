import React, { Component } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Media.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import atras from '../../assets/atras.png';
import tecnica from '../../assets/tecnica.jpeg';





export default class Bosque extends Component {

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

                            <div id="container">
                                <img src={tecnica} alt="" />
                            </div>
                            <div >
                                <div >
                                    <h4>MEDIA TÉCNICA</h4>

                                    <p>La media técnica en desarrollo de Software se ha implementado desde el año en el 2014
                                    en la institución educativa Francisco Antonio Zea, inicialmente se tenía el vínculo con
                                    el Politécnico Jaime Isaza Cadavid hasta el año 2020 que se realizó el nuevo vínculo con
                                    la Institución Universitaria Pascual Bravo. En el grado décimo se realiza una herramienta
                                    didáctica para dar solución algún problema dentro de la institución y en grado undécimo se
                                    realiza un aplicativo web analizando una problemática más a fondo. Los estudaintes obtienen
                                    su título de "Bachiller Técnico en Desarrollo de Software" y siempre se tiene el acompañamiento
                                    de los docentes de las universidades quienes guían cada uno de sus módulos.
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
                                            <img src={atras} alt="logo" onClick={() => this.props.history.goBack()} />
                                        </NavLink>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">
                        <div id="container">
                                <img src={tecnica} alt="" />
                            </div>
                            <div class="contenedor">
                                <div>
                                    <h4>MEDIA TÉCNICA</h4>

                                    <p>La media técnica en desarrollo de Software se ha implementado desde el año en el 2014
                                    en la institución educativa Francisco Antonio Zea, inicialmente se tenía el vínculo con
                                    el Politécnico Jaime Isaza Cadavid hasta el año 2020 que se realizó el nuevo vínculo con
                                    la Institución Universitaria Pascual Bravo. En el grado décimo se realiza una herramienta
                                    didáctica para dar solución algún problema dentro de la institución y en grado undécimo se
                                    realiza un aplicativo web analizando una problemática más a fondo. Los estudaintes obtienen
                                    su título de "Bachiller Técnico en Desarrollo de Software" y siempre se tiene el acompañamiento
                                    de los docentes de las universidades quienes guían cada uno de sus módulos.
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
