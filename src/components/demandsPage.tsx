import * as React from "react";
import {useState} from "react";


const CollapsableDemand = (props: { title: string, description: string[] }) => {
    return <div className="hero-text__phrase hero-text__phrase--collapse">
        <p className="title">{props.title}</p>
        <div className="description">
            {props.description.map(p => <p>{p}</p>)}
        </div>
    </div>;
}

export const DemandsPage = (): JSX.Element => {

    const [selected, setSelected] = useState("");

    return <div className="demands-content hero-image">
        <div className="hero-text">
            <CollapsableDemand title="Adequate and safe housing for all" description={[
                "All housing must be a public healthcare concern.",
                "House the most vulnerable: the homeless, domestic violence survivors, undocumented migrants, refugee and asylum seekers."
            ]}/>
            <CollapsableDemand title={"#CancelRent"} description={[
                "Rent, mortgages and housing payments should be cancelled for the duration of the pandemic crisis.",
                "All arrears accumulated during the crisis should be written off."
            ]}/>
            <CollapsableDemand title={"Homes for people, not for profit"} description={[
                "Expropriation of empty or misused private housing, including short term holiday rentals.",
                "Public housing policies should enforce housing as a right over its mercantilization in the long term."
            ]}/>
        </div>
    </div>;
};


