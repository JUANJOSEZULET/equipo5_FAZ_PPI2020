import React, { Component } from 'react';
import './Login.scss';
import { Breakpoint } from "react-socks";
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import Button from "@material-ui/core/Button/Button";
import atras from '../../assets/atras.png';



export default class Login extends Component {

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
                    <div className="dashboard-login" data-testid="main__dashboard">

                        <div class="login">
                            <div class="login-screen">
                                <div class="app-title">
                                    <h1>Iniciar sesión</h1>
                                </div>

                                <div class="login-form">
                                    <div class="control-group">
                                        <input type="text" class="login-field" value="" placeholder="usuario" id="login-name" />
                                        <label class="login-field-icon fui-user" for="login-name"></label>
                                    </div>

                                    <div class="control-group">
                                        <input type="password" class="login-field" value="" placeholder="contraseña" id="login-pass" />
                                        <label class="login-field-icon fui-lock" for="login-pass"></label>
                                    </div>

                                    <GoogleLogin id="google"

                                        clientId="522834172402-o084f5vci1lrdv54ma9pdbl41slenpf8.apps.googleusercontent.com"
                                        buttonText="Iniciar sesion"
                                        uxMode="redirect"
                                        redirectUri="http://localhost:3000/menu"
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
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

                            <div class="login">
                                <div class="login-screen">
                                    <div class="app-title">
                                        <h1>Iniciar sesión</h1>
                                    </div>

                                    <div class="login-form">
                                        <div class="control-group">
                                            <input type="text" class="login-field" value="" placeholder="usuario" id="login-name" />
                                            <label class="login-field-icon fui-user" for="login-name"></label>
                                        </div>

                                        <div class="control-group">
                                            <input type="password" class="login-field" value="" placeholder="contraseña" id="login-pass" />
                                            <label class="login-field-icon fui-lock" for="login-pass"></label>
                                        </div>

                                        <GoogleLogin id="google"

                                            clientId="522834172402-o084f5vci1lrdv54ma9pdbl41slenpf8.apps.googleusercontent.com"
                                            buttonText="Iniciar sesion"
                                            uxMode="redirect"
                                            redirectUri="http://localhost:3000/menu"
                                            cookiePolicy={'single_host_origin'}
                                        />

                                    </div>
                                </div>
                            </div>
                            <NavLink to="/menu">
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
