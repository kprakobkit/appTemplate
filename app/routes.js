import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Hello from './components/Hello';

export default (
  <Route component={App}>
  <Route path='/hello' component={Hello} />
  </Route>
);
