import * as React from "react";
import ReactTooltip from "react-tooltip";

export const DemandsPage = (): JSX.Element =>
    <div className="demands-content hero-image">
        <div data-tip data-for="tt-demands" className="hero-text">
            <p className="hero-text__phrase first">stop all evictions</p>
            <p className="hero-text__phrase second">cancel rent and debt</p>
            <p className="hero-text__phrase third">housing for all, immediately</p>
            <p className="hero-text__phrase fourth">establish rent controls</p>
        </div>
        <ReactTooltip id="tt-demands"> Here we will put our demands </ReactTooltip>
    </div>;