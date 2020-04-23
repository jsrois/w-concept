import * as React from "react";
import ReactTooltip from "react-tooltip";

export const DemandsPage = (): JSX.Element =>
    <div data-tip data-for="tt-background" className="demands-content hero-image">
        <div data-tip data-for="tt-demands" className="hero-text">
            <p className="hero-text__phrase first">stop all evictions</p>
            <p className="hero-text__phrase second">cancel rent and debt</p>
            <p className="hero-text__phrase third">housing for all, immediately</p>
            <p className="hero-text__phrase fourth">free sandwiches and free beer🍻</p>
        </div>
        <ReactTooltip id="tt-demands"> Here we could put our demands. The image is a placeholder.</ReactTooltip>
    </div>;