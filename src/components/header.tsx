import {Link} from "react-router-dom";
import * as React from "react";
import logo from '../images/logo.png';

export const Header = (): JSX.Element => (
    <header className="vertical-layout__header">
        <img className="logo" src={logo} />
        <nav className="navigation-bar">
            <Link to="/">Our Demands</Link>
            <Link to="/organizations">The Network</Link>
        </nav>
    </header>
);