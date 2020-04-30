import React , { Component } from 'react';
import styles from './Todo.css';
import Registration from '../Registration/Registration.js';


export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            task_realize: {},
            task_toRealize: {},
            task_end: {}
        };
        this.afterLoad = this.afterLoad.bind(this);
        this.returnPage = this.returnPage.bind(this);
    }
    componentDidMount() {
        this.afterLoad();
    }


    render(){
        return(
            <div className= {styles.headerMain} >
                <header className = {styles.headerNav} onLoad={this.afterLoad}> 
                    <h1> ITracers task-manager</h1>
                    <input className={styles.returnButton} type="button" onClick={this.returnPage} value="Return"></input>
                </header>
                <main className={styles.main}>

                </main>
            </div>
        )
    }
    returnPage(){ window.location.href='/' }


    afterLoad() {
        console.log("[Client] --> Отправляем запрос на сервер о выведении task'ов" );
        const options = {
            method: 'GET',
            header: {"content-type":"application/x-www-form-urlencoded"}
        } 
        fetch('http://localhost:4000/todo', options)
        .then( response => {
            if(response.status == 200) {    
                response.json().then(data=>({   //Снести(переписать)
                    data: data,
                    status: response.status
                })
                ).then(res => {
                    console.log(res.status, res.data.title)
                })
                return Promise.resolve();
            }
            if(response.status >= 400) {
                return Promise.reject( response.err );
            }
        })
        .catch ( err => {
            console.log(err);
        })
    }
}
