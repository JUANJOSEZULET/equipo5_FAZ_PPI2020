import React, { Component } from 'react';
import './Personeria.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import atras from '../../assets/atras.png';
import J from '../../assets/J.png';
import M from '../../assets/M.png';
import S from '../../assets/S.png';

export default class Personeria extends Component {

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

                            <section className="section">
                                <p>Mi nombre es Matías Arango Lopez, tengo 17 años, llevo 11 años en la institución. Ahora me encuentro en el grado 11°2. Me considero una muy buena persona para escuchar y aceptar opiniones y/o sugerencias para mejorar. Quiero ser el líder que lleve a cabo toda inconformidad que pueda ser frustrante para todos y darle una solución para el bien de la Institución. </p>
                            </section>

                            <section>

                                <h4>TARJETÓN #02 </h4>
                                <div class="circular--portrait">
                                    <img src={M} />
                                </div>
                            </section>

                            <section className="section">
                                <p>Mi nombre es Luisa Velez Garcia, tengo 18 años, llevo 14 años en la institución. Ahora me encuentro en el grado 11°2. Me considero una  persona  líder, quiero que mis compañeros y los estudiantes encuentren en mí un refugio para ser escuchados y yo ser su voz. Quiero que nuestros derechos y deberes sean cumplidos y apoyarlos en este proceso. </p>
                            </section>

                            <section>
                                <h4>TARJETÓN #3 </h4>
                                <div class="circular--portrait">
                                    <img src={S} />
                                </div>
                            </section>

                            <section className="section">
                                <p>Mi nombre es Santiago Andrey Nieto, tengo 18 años, de los cuales llevo 13 años en la institución. Actualmente hago parte del  grado 11°1 de la media tecnica. Soy líder y quiero ser la voz de mis compañeros frente a la institución y de ésta a mis compañeros, con el fin de que todos seamos participes de las actividades a beneficio mutuo; no quiero competir ni ser rival de nadie, siemplemente quiero que se sientan representados, por esto me gustaría formar un mini concejo escolar con las demás opciones a la personería para sacar adelante sus propuestas que junto con las mías nos beneficien a todos por igual. Seré el apoyo de todos los alumnos para hacer cumplir sus derechos y deberes como estudiantes. </p>
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

                            <section className="section">
                                <p>Mi nombre es Matías Arango Lopez, tengo 17 años, llevo 11 años en la institución. Ahora me encuentro en el grado 11°2. Me considero una muy buena persona para escuchar y aceptar opiniones y/o sugerencias para mejorar. Quiero ser el líder que lleve a cabo toda inconformidad que pueda ser frustrante para todos y darle una solución para el bien de la Institución. </p>
                            </section>

                            <section>

                                <h4>TARJETÓN #02 </h4>
                                <div class="circular--portrait">
                                    <img src={M} />
                                </div>
                            </section>

                            <section className="section">
                                <p>Mi nombre es Luisa Velez Garcia, tengo 18 años, llevo 14 años en la institución. Ahora me encuentro en el grado 11°2. Me considero una  persona  líder, quiero que mis compañeros y los estudiantes encuentren en mí un refugio para ser escuchados y yo ser su voz. Quiero que nuestros derechos y deberes sean cumplidos y apoyarlos en este proceso. </p>
                            </section>

                            <section>
                                <h4>TARJETÓN #3 </h4>
                                <div class="circular--portrait">
                                    <img src={S} />
                                </div>
                            </section>

                            <section className="section">
                                <p>Mi nombre es Santiago Andrey Nieto, tengo 18 años, de los cuales llevo 13 años en la institución. Actualmente hago parte del  grado 11°1 de la media tecnica. Soy líder y quiero ser la voz de mis compañeros frente a la institución y de ésta a mis compañeros, con el fin de que todos seamos participes de las actividades a beneficio mutuo; no quiero competir ni ser rival de nadie, siemplemente quiero que se sientan representados, por esto me gustaría formar un mini concejo escolar con las demás opciones a la personería para sacar adelante sus propuestas que junto con las mías nos beneficien a todos por igual. Seré el apoyo de todos los alumnos para hacer cumplir sus derechos y deberes como estudiantes. </p>
                            </section>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
