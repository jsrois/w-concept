import * as React from "react";
import facebookLogo from "../images/social/facebook.svg";
import twitterLogo from "../images/social/twitter.svg";
import ReactTooltip from "react-tooltip";

export const Footer = (): JSX.Element =>
    <footer className="vertical-layout__footer">
        <div>
            Follow us:
            <div className="social-media-links">
                <a data-tip data-for="tt-twitterlogo" className="link" href=""><img src={twitterLogo} alt="twitter"/></a>
                <a data-tip data-for="tt-fblogo" className="link" href=""><img src={facebookLogo} alt="facebook"/></a>
            </div>
        </div>
        <ReactTooltip id="tt-twitterlogo">Link to our Twitter account</ReactTooltip>
        <ReactTooltip id="tt-fblogo">Link to our Facebook account</ReactTooltip>
    </footer>;