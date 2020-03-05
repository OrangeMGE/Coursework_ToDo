import React , { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import '../index.css';


export default class Registration extends Component {
  render(){
    return(
      <form className='box' action='/login' method='POST' >
        <h1> Login </h1>
        <input type='text' name='' placeholder='Username' />
        <input type='password' name='' placeholder='Password' />
        <input type='submit' name='' value='Login' />
      </form>
    )
  }
}
