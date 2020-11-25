import React, { Component } from 'react';
import './Contraloria.scss';
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import atras from '../../assets/atras.png';
import G from '../../assets/G.png';
import V from '../../assets/V.png';



export default class Contraloria extends Component {

    render() {
        return (
            <>

                <Breakpoint large up>
                    <nav className="navbar-wrapper">
                        <Breakpoint large up>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">


                                    <li className="sidebar-link-logo">
                                        <Link>
                                            <img src={atras} alt="logo" onClick={() => this.props.history.goBack()} />
                                        </Link>
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

                            <section className="section">
                                <p>Mi nombre es Isabela Cardenas, tengo 15 años,  de los cuales llevo 3 años en la institución. Actualmente hago parte del grado 10°1 de la media técnica. Soy líder y quiero ser la voz de mis compañeros frente a la institución y de ésta a mis compañeros, con el fin de que todos seamos partícipes de las actividades a beneficio. Seré el apoyo de todos los alumnos para hacer cumplir sus derechos y deberes como estudiantes. </p>
                            </section>

                            <section>

                                <h4>TARJETÓN #20 </h4>
                                <div class="circular--portrait">
                                    <img src={V} />
                                </div>
                            </section>

                            <section className="section">
                                <p>Mi nombre es Laura Ceballos, tengo 17 años, llevo 14 
                                    años en la institución. Ahora me encuentro en el grado 11°2. Me 
                                    considero una  persona  líder, quiero que mis compañeros y los estudiantes 
                                    encuentren en mí un refugio para ser escuchados y yo ser su voz. Quiero que 
                                    nuestros derechos y deberes sean cumplidos y apoyarlos en este proceso. </p>
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
                                        <Link>
                                            <img src={atras} alt="logo" onClick={() => this.props.history.goBack()} />
                                        </Link>
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

                            <section className="section">
                                <p>Mi nombre es Isabela Cardenas, tengo 15 años,  de los cuales llevo 3 años en la institución. Actualmente hago parte del grado 10°1 de la media técnica. Soy líder y quiero ser la voz de mis compañeros frente a la institución y de ésta a mis compañeros, con el fin de que todos seamos partícipes de las actividades a beneficio. Seré el apoyo de todos los alumnos para hacer cumplir sus derechos y deberes como estudiantes. </p>
                            </section>

                            <section>

                                <h4>TARJETÓN #20 </h4>
                                <div class="circular--portrait">
                                    <img src={V} />
                                </div>
                            </section>

                            <section className="section">
                                <p>Mi nombre es Laura Ceballos, tengo 17 años, llevo 14 años en la institución. Ahora me encuentro en el grado 11°2. Me considero una  persona  líder, quiero que mis compañeros y los estudiantes encuentren en mí un refugio para ser escuchados y yo ser su voz. Quiero que nuestros derechos y deberes sean cumplidos y apoyarlos en este proceso. </p>
                            </section>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
