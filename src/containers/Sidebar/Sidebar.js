import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {NavLink} from 'react-router-dom';
import TmdbIcon from '../../assets/home.png';
import './Sidebar.scss';

const Sidebar = () => {
    const [expandedLinks, setExpandedLinks] = useState(false);

    const toggleLinks = () => {
        setExpandedLinks(!expandedLinks);
    };

    return (
        <>
            <ul className="sidebar-top">
                <div className="sidebar-links">

                    <li className="sidebar-link-logo"
                        onClick={() => setExpandedLinks(false)}>
                        <NavLink to="/">
                            <img src={TmdbIcon} alt="logo"/>
                        </NavLink>
                    </li>
                    <li className="sidebar-link-logo"
                        onClick={() => this.props.history.goBack}>
                       
                    </li>
                </div>
            </ul>

        </>
    );
};

export default Sidebar;
