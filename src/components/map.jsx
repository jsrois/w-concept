import React from 'react';
import {ComposableMap, Geographies, Geography} from "react-simple-maps";

const basicStyle = {
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


export const Map = () => (
    <ComposableMap
        width={980}
        height={551}
        style={{
            width: "100%",
            height: "auto"
        }}
    >
        <Geographies
            geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json">
            {(children) => {
                const projection = children.projection;
                return children.geographies.map(geography => {
                        return <Geography
                            projection={projection}
                            geography={geography}
                            style={
                                basicStyle
                            }/>;
                    }
                );
            }}
        </Geographies>
    </ComposableMap>
);

export default Map;
