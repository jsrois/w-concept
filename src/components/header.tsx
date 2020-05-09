import {Link} from "react-router-dom";
import * as React from "react";
import logo from '../images/tsn-logo-centered-white.png';
import ReactTooltip from "react-tooltip";

export const Header = (): JSX.Element => (
    <header className="vertical-layout__header">
        <nav className="navigation-bar">
            <div className="navigation-bar__logo logo-box">
                <img className="logo" src={logo}/>
            </div>
            <Link className="navigation-bar__link" to="/articles">News</Link>
            <Link className="navigation-bar__link" to="/covid19-demands">Covid-19</Link>
            <Link className="navigation-bar__link" to="/organizations">The Network</Link>
        </nav>
    </header>
);