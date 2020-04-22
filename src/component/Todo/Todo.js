import React , { Component } from 'react';
import styles from './Todo.css';
import { Route, BrowserRouter, Redirect, Switch, Link, withRouter } from "react-router-dom";
export default class Todo extends Component {


    render(){
        return(
            <div className= {styles.main} >
                <header className = {styles.headerNav} > 
                    <h1> ITracers task-manager</h1>
                    <nav>
                        <a className={styles.photoProfile}>  Picture </a>
                    </nav>

                </header>
            </div>
        )
    }
}