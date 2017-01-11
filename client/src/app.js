var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './containers/Main'
import EbayContainer from './containers/EbayContainer'
import FreeAgentContainer from './containers/FreeAgentContainer'

window.onload = function(){
  ReactDOM.render(
    <Router history={ hashHistory } >
      <Route path="/" component={ Main }>
        <IndexRoute component={ EbayContainer } />
        <Route path="ebay" component={ EbayContainer } />
        <Route path="free-agent" component={ FreeAgentContainer } />
      </Route>
    </Router>,
    document.getElementById('app')
  );
}
