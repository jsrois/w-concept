import * as React from 'react';
import {DemandsPage} from "./demandsPage";
import {OrganizationsPage} from "./organizationsPage";
import {MainPage} from "./MainPage";

export const Content = (): JSX.Element => (
    <div className="vertical-layout__content">
       <MainPage />
       <DemandsPage />
       <OrganizationsPage />
    </div>
);