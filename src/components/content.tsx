import * as React from 'react';
import {DemandsPage} from "./demandsPage";
import {OrganizationsPage} from "./organizationsPage";
import {MainPage} from "./MainPage";

export const Content = (): JSX.Element => (
    <div className="vertical-layout__content">
        <section className="vertical_snap"><MainPage /></section>
        <section className="vertical_snap"><DemandsPage /></section>
        <section className="vertical_snap"><OrganizationsPage /></section>
    </div>
);