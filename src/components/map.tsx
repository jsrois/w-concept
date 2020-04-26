import * as React from 'react';
import {ComposableMap, Geographies, Geography} from "react-simple-maps";


const defaultGeographyStyle = {
    default: {
        fill: "#fff8f0",
        stroke: "#B2A27D",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms"
    },
    hover: {
        fill: "#fff8f0",
        stroke: "#B2A27D",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms"
    },
    pressed: {
        fill: "#fff8f0",
        stroke: "#B2A27D",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms"
    }

};

const networkGeographyStyle = {
    default: {
        fill: "#3f0d12",
        stroke: "#B2A27D",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms"
    },
    hover: {
        fill: "#de3c4b",
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

const countriesInNetwork = [
    "United States of America",
    "Spain",
    "Italy",
    "Argentina",
    "Canada",
    "Germany",
    "Greece",
    "Netherlands",
    "Belgium",
    "United Kingdom",
    "Ireland",
    "New Zealand"
];

export const Map = (): JSX.Element => (
    <div id="organisations-content__world-map">
        <ComposableMap
            projectionConfig={{
                scale: 205,
                rotate: [-11, 0, 0]
            }}
            width={980}
            height={551}
            style={{
                width: "100%",
                height: "auto"
            }}
        >
            <Geographies
                geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json">
                {children => (
                    children.geographies.map(geography => {
                            const countryName = geography.properties.NAME;
                            return <Geography
                                key={countryName}
                                geography={geography}
                                style={countriesInNetwork.includes(countryName) ?
                                    networkGeographyStyle :
                                    defaultGeographyStyle}/>;
                        }
                    )
                )}
            </Geographies>
        </ComposableMap>
    </div>
);