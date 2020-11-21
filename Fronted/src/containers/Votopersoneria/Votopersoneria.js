import React, { useState, useEffect } from "react";
import './Votopersoneria.scss';
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import atras from '../../assets/atras.png';
import J from '../../assets/J.png';
import M from '../../assets/M.png';
import S from '../../assets/S.png';

export default function Votopersoneria() {
    const [personeros, setPersoneros] = useState([]);
    const [count, setCount] = useState(0)
    const [visible, setVisible] = useState(true)

    async function fetchData() {
        const response = await fetch("http://localhost:3001/api/personeros");
        const data = await response.json();
        setPersoneros(data);
    }

    function sendCount() {
        setCount(count + 1)
        console.log(`los votos del personero son: ${count}`)
        setVisible(false)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>

            <Breakpoint large up>
                <nav className="navbar-wrapper">
                    <Breakpoint large up>
                        <ul className="sidebar-top">
                            <div className="sidebar-links">


                                <li className="sidebar-link-logo">
                                    <Link to="/voto">
                                        <img src={atras} alt="logo" />
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </Breakpoint>
                </nav>
                <div className="dashboard" data-testid="main__dashboard">
                    <div className="dashboard-card-wrapper">
                        {personeros &&
                            personeros.length > 0 &&
                            personeros.map((personero) => (
                                <div>
                                    <section key={personero.name}>
                                        <h4>
                                            {personero.nombre} {personero.apellidos}
                                        </h4>
                                        <h4>{personero.cargo}</h4>
                                        <h4>{personero.tarjeton}</h4>
                                        <div class="circular--portrait">
                                        <img src={require("../../assets/" + personero.imagen)} />
                                        </div>
                                    </section>
                                    <section>
                                        {visible ?
                                            <button type="button" onClick={() => sendCount()} className="button1">Votar</button>
                                            : <button type="button" disabled className="button1">Votar</button>
                                        }
                                    </section>
                                </div>
                            ))}
                    </div>
                </div>
            </Breakpoint>

            <Breakpoint small down>
                <nav className="navbar-wrapper">
                    <Breakpoint small down>
                        <ul className="sidebar-top">
                            <div className="sidebar-links">


                                <li className="sidebar-link-logo">
                                    <Link to="/voto">

                                        <img src={atras} alt="logo" />
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </Breakpoint>
                </nav>

                <div className="dashboard-mobile" data-testid="main__dashboard">
                    <div className="dashboard-card-wrapper">
                    {personeros &&
                            personeros.length > 0 &&
                            personeros.map((personero) => (
                                <div>
                                    <section key={personero.name}>
                                        <h4>
                                            {personero.nombre} {personero.apellidos}
                                        </h4>
                                        <h4>{personero.cargo}</h4>
                                        <h4>{personero.tarjeton}</h4>
                                        <div class="circular--portrait">
                                        <img src={require("../../assets/" + personero.imagen)} />
                                        </div>
                                    </section>
                                    <section>
                                        {visible ?
                                            <button type="button" onClick={() => sendCount()} className="button1">Votar</button>
                                            : <button type="button" disabled className="button1">Votar</button>
                                        }
                                    </section>
                                </div>
                            ))}
                    </div>
                </div>
            </Breakpoint>
        </>
    );

}
