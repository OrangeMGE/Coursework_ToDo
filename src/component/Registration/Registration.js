import React , { Component } from 'react';
import ReactDOM from "react-dom";
import styles from './Registration.css';


export default class Registration extends Component {
  render(){
    return(
      <div className={ styles.box } action='localhost:4000' method='POST' >
        <h1> Login </h1>
        <input type='text' name='' placeholder='Username' />
        <input type='password' name='' placeholder='Password' />
        <input type='submit' name='' value='Login' />
      </div>
    )
  }
}
