import * as React from "react";
import {Map} from "./map";
import {useState} from "react";

const countries = [
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

interface CountryInfo {
    name: String;
    text: String;
}

const noCountry = {name: "", text:""} as CountryInfo;

const OverlayMessage = (props: {info: CountryInfo, onClickClose: () => void}): JSX.Element => (
    <div className="organisations-content__overlay-message">
        <p>{props.info.name}</p>
        <p>{props.info.text}</p>
        <a onClick={props.onClickClose}>Close Info</a>
    </div>
);

export const OrganizationsPage = (): JSX.Element => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayInfo, setOverlayInfo] = useState(noCountry);

    const onCountryClicked = (countryName: String) => () => {
        setOverlayInfo({ name: countryName, text: "Here goes the country information"} as CountryInfo);
        setShowOverlay(true);
        return;
    }

    return <div className="organisations-content">
        {showOverlay && <OverlayMessage info={overlayInfo} onClickClose={() => setShowOverlay(false)} />}
        <Map countriesInNetwork={countries} onCountryClicked={onCountryClicked}/>
    </div>;
};