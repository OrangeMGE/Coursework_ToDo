import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DevTools from 'mobx-react-devtools'

class Main extends Component {
  render() {
    return(
      <div>
        <h1>Максим пидор</h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.unregister();
