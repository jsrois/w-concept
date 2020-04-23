import {Link} from "react-router-dom";
import * as React from "react";
import logo from '../images/logo.png';
import ReactTooltip from "react-tooltip";

export const Header = (): JSX.Element => (
    <header className="vertical-layout__header">
        <img data-tip data-for="tt-logo" className="logo" src={logo} />
        <nav className="navigation-bar">
            <Link to="/">Our Demands</Link>
            <Link to="/organizations">The Network</Link>
        </nav>
        <ReactTooltip id="tt-logo">Here we'll put our logo</ReactTooltip>
    </header>
);