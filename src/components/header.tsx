import {Link} from "react-router-dom";
import * as React from "react";
import logo from '../images/logo.png';
import ReactTooltip from "react-tooltip";

export const Header = (): JSX.Element => (
    <header className="vertical-layout__header">
        <img data-tip data-for="tt-logo" className="logo" src={logo} />
        <nav className="navigation-bar">
            <Link data-tip data-for="tt-demands-button"  to="/">Our Demands</Link>
            <Link data-tip data-for="tt-orgs" to="/organizations">The Network</Link>
        </nav>
        <ReactTooltip id="tt-logo">Here we'll put our logo</ReactTooltip>
        <ReactTooltip id="tt-orgs">Information about the organizations in this network</ReactTooltip>
        <ReactTooltip id="tt-demands-button">Here we will put our demands</ReactTooltip>
    </header>
);