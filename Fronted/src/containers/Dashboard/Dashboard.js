import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import './Dashboard.scss';
import ImagenGrande from "../../assets/ZEAPP (4).png";
import ImagenPeque from "../../assets/zeapp(5).png";
import Button from '@material-ui/core/Button';


export class Dashboard extends Component {
    render() {
        return (
            <>
                <Breakpoint large up>
                    <div className="dashboard" data-testid="main__dashboard">
                        <img src={ImagenGrande} alt="logo" />
                        <div className="dashboard-card-wrapper">
                            <Link to="/login">
                                <div>
                                    <button class="button button5">Iniciar sesión</button>

                                </div>
                            </Link>
                        </div>
                    </div>
                </Breakpoint>

                <Breakpoint small down>
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <img src={ImagenPeque} alt="logo" />
                        <div className="dashboard-card-wrapper">
                            <Link to="/login">
                                <div>
                                    <button class="button button5">Iniciar sesión</button>

                                </div>
                            </Link>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}

export default Dashboard;
