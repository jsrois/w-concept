import * as React from 'react';
import {ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import {OrganizationInfo} from "./organizationsPage";

export interface Props {
    countriesInNetwork: String[];
    organizations: OrganizationInfo[];
    onCountryClicked: (country: String) => () => void;
}

export const Map = (props: Props): JSX.Element => {

        return <div className="organisations-content__world-map">

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
                                    onMouseUp={props.countriesInNetwork.includes(countryName) ? props.onCountryClicked(countryName) : () => {
                                    }}
                                />;
                            }
                        )
                    )}
                </Geographies>
                {props.organizations.map(organization =>
                    <Marker className="map-marker"
                            coordinates={organization.markerCoordinates}>
                        <circle className="map-marker__circle" r={4}/>
                    </Marker>
                )}
            </ComposableMap>
        </div>
    }
;
