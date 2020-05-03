import {Link} from "react-router-dom";
import * as React from "react";
import logo from '../images/tsn-logo-centered-white.png';
import ReactTooltip from "react-tooltip";

export const Header = (): JSX.Element => (
    <header className="vertical-layout__header">
        <nav className="navigation-bar">
            <div className="logo-box">
                <img className="logo" src={logo}/>
            </div>
            <Link  to="/covid19-demands">Covid-19 Crisis</Link>
            <Link to="/organizations">The Network</Link>
        </nav>
    </header>
);