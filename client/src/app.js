var React = require('react');
var ReactDOM = require('react-dom');

import Main from './containers/Main'

window.onload = function(){
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  );
}
