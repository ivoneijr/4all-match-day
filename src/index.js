import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './javascripts/components/dashboard';
import App from './javascripts/components/header';

import './stylesheets/index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={Dashboard}>
        {/* <Route path="/" component={Home} /> */}
      </Route>
    </div>
    </BrowserRouter>, document.getElementById('app')
);

