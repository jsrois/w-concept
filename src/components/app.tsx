import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Header} from "./header";
import {Footer} from "./footer";
import {Content} from "./content";

export const App = (): JSX.Element => (
    <Router>
        <Header/>
        <Content />
        <Footer />
    </Router>
);