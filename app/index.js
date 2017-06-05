import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import Main from './Components/Main/Main';
import Location from './Components/Location/Location'

render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path='location' component={Location}/>
      </Route>
    </Router>
  , document.querySelector('.application'))
