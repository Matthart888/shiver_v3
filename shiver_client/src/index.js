import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
// import { BrowserRouter } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';

const routes = [
  {
    path: '/',
    component: App,
    name: 'Main-Page'
  }
]
const root = document.getElementById('root');
const hist = createBrowserHistory();
ReactDOM.render(<Router history={hist}>
        <Switch>
            {
              routes.map((route)=>{
                return(
                  <Route path={route.path} component={route.component} key={route.name} />
                )
              })
            }
        </Switch>
    </Router>, root);
