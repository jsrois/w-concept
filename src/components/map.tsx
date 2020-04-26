import * as React from 'react';
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps";

const geographyStyle = {
    default: {
        fill: "#F0EAD6",
        stroke: "#B2A27D",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms"
    },
    hover: {
        fill: "#FF6F61",
        stroke: "#9E1030",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms"
    },
    pressed: {
        fill: "#DD4132",
        stroke: "#9E1030",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms"
    }
};

export const Map = (): JSX.Element => (
    <div id="organisations-content__world-map">
        <ComposableMap>
                <Geographies
                    geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json">
                    {content => (
                        content.geographies.map(geography =>
                            
                            <Geography geography={geography} style={geographyStyle}/>
                        )
                    )}
                </Geographies>
        </ComposableMap>
    </div>
);