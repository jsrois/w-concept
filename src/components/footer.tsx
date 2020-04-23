import * as React from "react";
import facebookLogo from "../images/social/facebook.svg";
import twitterLogo from "../images/social/twitter.svg";

export const Footer = (): JSX.Element =>
    <footer>
        <div>
            Follow us:
            <div className="social-media-links">
                <a className="link" href=""><img src={twitterLogo} alt="twitter"/></a>
                <a className="link" href=""><img src={facebookLogo} alt="facebook"/></a>
            </div>
        </div>
    </footer>;