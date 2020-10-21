import React from 'react';
import {Breakpoint} from 'react-socks';
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss';

const Header = () => {
    return (
        <nav className="navbar-wrapper">
            <Breakpoint medium up>
                <Sidebar/>
            </Breakpoint>
            <Breakpoint small down>
                <Sidebar/>
            </Breakpoint>
        </nav>
    );
};

export default Header;
