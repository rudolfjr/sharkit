import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/';
import Single from './templates/Single/';
import Servico from './templates/Servico/';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/vaga/:slug" component={Single} />
            <Route exact path="/servico/:slug" component={Servico} />
        </Switch>
    </BrowserRouter>, document.getElementById('root')
    ); 