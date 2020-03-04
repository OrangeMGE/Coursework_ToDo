import React , { Component } from 'react';
import ReactDOM, { render } from 'react-dom';


export default class Registration extends Component {
  state = {
    isAuthorized : false
  }

  render(){
    if(this.state.isAuthorized){
      return(
        <div> Ok, this work </div>
      )
    }
    return(
      <button onClick={this.buttonAction}>
        {this.state.isAuthorized ? 'isAuth' : 'Not Auth'}
      </button>
    )
  }

  buttonAction = () => {
    this.setState({
      isAuthorized : !this.state.isAuthorized
    })
  }
}
