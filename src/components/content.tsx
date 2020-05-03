import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import {DemandsPage} from "./demandsPage";
import {OrganizationsPage} from "./organizationsPage";
import {MainPage} from "./MainPage";

export const Content = (): JSX.Element => (
    <div className="vertical-layout__content">
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/covid19-demands" component={DemandsPage}/>
            <Route path="/organizations" component={OrganizationsPage}/>
        </Switch>
    </div>
);