import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import {DemandsPage} from "./demandsPage";
import {OrganizationsPage} from "./organizationsPage";

export const Content = (): JSX.Element => (
    <div className="page-content">
        <Switch>
            <Route exact path="/" component={DemandsPage}/>
            <Route path="/organizations" component={OrganizationsPage}/>
        </Switch>
    </div>
);