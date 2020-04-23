import * as React from "react";
import {Map} from "./map";
import {useState} from "react";


export const OrganizationsPage = (): JSX.Element => {
    const [hideOverlay, setHideOverlay] = useState(true);

    return <div className="organisations-content"
                onMouseEnter={() => setHideOverlay(false)}
                onMouseLeave={() => setHideOverlay(true)}>
        <div className="organisations-content__overlay-message" hidden={hideOverlay}>
            <h1>Work in progress</h1>

            <p>Here we could have an interactive svg-map or we can embed one Carto map like the one from the
                Anti-Eviction mapping project (we could even link to the same one)</p>

            <p>The idea is: when you click on each country you can see which organizations of the network exist there or
                if there are ongoing state-wide or local <b>rent strikes</b>.</p>
        </div>
        <Map/>
    </div>
};