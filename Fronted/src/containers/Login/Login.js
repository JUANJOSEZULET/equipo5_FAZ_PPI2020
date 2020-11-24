import React, { useState } from 'react';
import './Login.scss';
import { Breakpoint } from "react-socks";
import { NavLink, Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import Button from "@material-ui/core/Button/Button";
import atras from '../../assets/atras.png';


const initialState = {
    "documento": "",
    "nombre": "",
    "clave": ""
}

export default function Login() {
    const [data, setData] = useState(initialState)

    function getValues(e) {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function submitData(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:3001/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

    }


    return (
        <>

            <Breakpoint large up>
                <nav className="navbar-wrapper">
                    <Breakpoint large up>
                        <ul className="sidebar-top">
                            <div className="sidebar-links">
                                <li className="sidebar-link-logo">
                                <Link to="/header">
                                        <img src={atras} alt="logo" />
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </Breakpoint>
                </nav>
                <div className="dashboard-login" data-testid="main__dashboard">

                    <div class="login">
                        <div class="login-screen">
                            <div class="app-title">
                                <h1>Iniciar sesión</h1>
                            </div>
                            <form onSubmit={submitData}>

                                <div class="login-form">
                                    <div class="control-group">
                                        <input type="text"
                                            class="login-field"
                                            placeholder="usuario"
                                            id="login-name"
                                            onChange={(e) => getValues(e)}
                                            name="nombre" />
                                        <label class="login-field-icon fui-user" for="login-name"></label>
                                    </div>

                                    <div class="control-group">
                                        <input type="password"
                                            class="login-field"

                                            placeholder="contraseña"
                                            id="login-pass"
                                            onChange={(e) => getValues(e)}
                                            name="clave"
                                        />
                                        <label class="login-field-icon fui-lock" for="login-pass"></label>
                                    </div>
                                    <div class="control-group">
                                        <input type="text"
                                            class="login-field"
                                            placeholder="Documento"
                                            id="login-pass"
                                            onChange={(e) => getValues(e)}
                                            name="documento"
                                        />
                                        <label class="login-field-icon fui-lock" for="login-pass"></label>
                                    </div>
                                    <Link to="/menu">
                                        <button type="submit" onclick={() => submitData}>Iniciar</button>
                                    </Link>
                                    {/* <button type="submit" onclick={() => submitData}>Registrarme</button> */}


                                    {/* <GoogleLogin id="google"

                                            clientId="522834172402-o084f5vci1lrdv54ma9pdbl41slenpf8.apps.googleusercontent.com"
                                            buttonText="Iniciar sesion"
                                            uxMode="redirect"
                                            redirectUri="http://localhost:3000/menu"
                                            cookiePolicy={'single_host_origin'}
                                        /> */}


                                </div>
                            </form>
                        </div>
                    </div>

                    <NavLink to="/menu">
                        <div>

                        </div>
                    </NavLink>
                </div>
            </Breakpoint>

            <Breakpoint small down>

                <nav className="navbar-wrapper">
                    <Breakpoint small down>
                        <ul className="sidebar-top">
                            <div className="sidebar-links">


                                <li className="sidebar-link-logo">
                                <Link to="/Header">
                                        <img src={atras} alt="logo" />
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </Breakpoint>
                </nav>
                <div className="dashboard-mobile" data-testid="main__dashboard">
                    <div className="dashboard-card-wrapper">

                        <div class="login">
                            <div class="login-screen">
                                <div class="app-title">
                                    <h1>Iniciar sesión</h1>
                                </div>
                                <form onSubmit={submitData}>

                                    <div class="login-form">
                                        <div class="control-group">
                                            <input type="text"
                                                class="login-field"
                                                placeholder="usuario"
                                                id="login-name"
                                                onChange={(e) => getValues(e)}
                                                name="nombre" />
                                            <label class="login-field-icon fui-user" for="login-name"></label>
                                        </div>

                                        <div class="control-group">
                                            <input type="password"
                                                class="login-field"

                                                placeholder="contraseña"
                                                id="login-pass"
                                                onChange={(e) => getValues(e)}
                                                name="clave"
                                            />
                                            <label class="login-field-icon fui-lock" for="login-pass"></label>
                                        </div>
                                        <div class="control-group">
                                            <input type="text"
                                                class="login-field"
                                                placeholder="Documento"
                                                id="login-pass"
                                                onChange={(e) => getValues(e)}
                                                name="documento"
                                            />
                                            <label class="login-field-icon fui-lock" for="login-pass"></label>
                                        </div>
                                        <Link to="/menu">
                                        <button type="submit" onclick={() => submitData}>Iniciar</button>
                                        </Link>
                                        {/* <button type="submit" onclick={() => submitData}>Registrarme</button> */}


                                        {/* <GoogleLogin id="google"

                                            clientId="522834172402-o084f5vci1lrdv54ma9pdbl41slenpf8.apps.googleusercontent.com"
                                            buttonText="Iniciar sesion"
                                            uxMode="redirect"
                                            redirectUri="http://localhost:3000/menu"
                                            cookiePolicy={'single_host_origin'}
                                        /> */}


                                    </div>
                                </form>
                            </div>
                        </div>
                        <Link to="/menu">
                            <div>


                            </div>
                        </Link>
                    </div>
                </div>
            </Breakpoint>
        </>
    );
}
