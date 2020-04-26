import * as React from 'react';
import {ComposableMap, Geographies, Geography} from "react-simple-maps";
import {useState} from "react";


const defaultGeographyStyle = {
    default: {
        fill: "#fff8f0",
        stroke: "#B2A27D",
        strokeWidth: 0.45,
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
        strokeWidth: 0.45,
        outline: "none",
        transition: "all 250ms",
        cursor: "pointer"
    },
    hover: {
        fill: "#8c271e",
        stroke: "#8c271e",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms",
        cursor: "pointer"
    },
    pressed: {
        fill: "#8c271e",
        stroke: "#8c271e",
        strokeWidth: 0.75,
        outline: "none",
        transition: "all 250ms",
        cursor: "pointer"
    }
};




export interface Props {
    countriesInNetwork: String[];
    onCountryClicked: (country: String) =>  () => void;
}

export const Map = (props: Props): JSX.Element => {

        return <div id="organisations-content__world-map">

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
                                    style={props.countriesInNetwork.includes(countryName) ?
                                        networkGeographyStyle :
                                        defaultGeographyStyle}
                                    onMouseUp={props.countriesInNetwork.includes(countryName) ? props.onCountryClicked(countryName) : () => {}}
                                />;
                            }
                        )
                    )}
                </Geographies>
            </ComposableMap>
        </div>
    }
;
