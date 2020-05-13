import * as React from "react";
import {useState} from "react";
import * as Data from "../data/demands.json";

interface DemandsInfo {
    title: string;
    description: string[];
}

const demands = Data.demands as DemandsInfo[];

const CollapsableDemand = (props: { key: string, title: string, description: string[], onSelection: () => void, selected: boolean }) => {
    return <div className={props.selected ? "hero-text__phrase hero-text__phrase--selected" : "hero-text__phrase"}
                onMouseUp={props.onSelection}>
        <div className="title">{props.title}</div>
        <div className="description">
            {props.description.map(p => <p>{p}</p>)}
        </div>
    </div>;
}


export const DemandsPage = (): JSX.Element => {

    const [selectedKey, setSelectedKey] = useState("");

    return <div className="demands-content hero-image">
        <div className="hero-text">
            {
                demands.map((d, k) =>
                    <CollapsableDemand {...d}
                                       key={k.toString()}
                                       onSelection={() => setSelectedKey(k.toString())}
                                       selected={selectedKey === k.toString()}/>)
            }
        </div>
    </div>;
};


