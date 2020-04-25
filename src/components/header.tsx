import {Link} from "react-router-dom";
import * as React from "react";
import logo from '../images/tsn-logo-centered-white.png';
import ReactTooltip from "react-tooltip";

export const Header = (): JSX.Element => (
    <header className="vertical-layout__header">
        <nav className="navigation-bar">
            <div data-tip data-for="tt-logo" className="logo-box">
                <img data-tip data-for="tt-logo" className="logo" src={logo}/>
            </div>
            <Link data-tip data-for="tt-demands-button" to="/">Our Demands</Link>
            <Link data-tip data-for="tt-campaign-link" to="/">#OurCoolHashtag</Link>
            <Link data-tip data-for="tt-orgs" to="/organizations">The Network</Link>
        </nav>
        <ReactTooltip id="tt-logo">Here we could put our logo</ReactTooltip>
        <ReactTooltip id="tt-orgs">Information about the organizations in this network</ReactTooltip>
        <ReactTooltip id="tt-demands-button">Here we could put our demands</ReactTooltip>
        <ReactTooltip id="tt-campaign-link">Here we could put the info about the campaign</ReactTooltip>
    </header>
);