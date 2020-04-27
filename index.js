import React from 'react';
import { render } from "react-dom";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dash from './logic/Dashboard';
import premium from './logic/premium';
import Register from './comp/SignupForm';
import StateDashboard from './comp/StateDashboard';
import Rout from './logic/Router';
require('./style.css');
import DataTable from'./comp/DataTable';


function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Dash} exact />
                <Route path="/premium" component={premium} />
                <Route path="/dashboard" component={Dash} />
                <Route path="/signupForm" component={Register} />
                <Route path="/statedashboard" component={StateDashboard} />

            </Switch>
        </main>
    )
}

const container = document.createElement('div');
document.body.appendChild(container);
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    container
)
