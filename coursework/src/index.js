import React , { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//Components import
import Registration from './Components/Registration.js'

class Page extends Component {
  render(){
    return(
      <Registration />
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('root'));

serviceWorker.unregister();
