import React , { Component } from 'react';
import styles from './Registration.css';


export default class Registration extends Component {
  constructor(props){
    super(props)
    this.state = {
      serverResponseOfLogin: false
    }
    this.SendServerLoginForm = SendServerLoginForm.bind(this);
  }

  render() {
    const status = this.state.serverResponseOfLogin && <h1 className={ styles.login_status }>Пользователь не найден</h1>;

    return(
      <div className={ styles.parrent }>
        <h1 className={ styles.title }>Task Manager</h1>
        {status}
        <div className={ styles.box }>
          <h1> Login </h1>
          <input type='text' id='username' name='' placeholder='Username' />
          <input type='password' id='password' name='' placeholder='Password' />

          <input type='submit' name='' value='Login' onClick={this.SendServerLoginForm}/>

        </div>
        <div className={ styles.by }>
          <h2> By Orange </h2>
        </div>
      </div>
    )
  }
}


function SendServerLoginForm() {
  console.log('Send verify on server')

  let loginForm = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    get urlCode() {
      return ("/login" + '&' + loginForm.username + '/' + loginForm.password); //URL ссылка которая отправляется
    }
  };
  console.log(loginForm);

  console.log('[Client] --> GET send on '+ loginForm.urlCode);  
  const options = {
    method:'GET',
    headers:{"content-type":"application/x-www-form-urlencoded"} // <-- В душе не чаю что это такое
  }
  
  fetch('http://localhost:4000' + loginForm.urlCode, options) //Отправялем на сервер по адресу + url-форма
  .then( response => {
    if(response.status !== 200) {
      return Promise.reject( response.status );
    }
    if(response.status == 200){
      console.log(response.text());
      return Promise.resolve();
    }
  })
  .catch( (error_status) => {
    if(error_status == 404){
      console.log('Ошибка ==> ' + 'Учетная запись не найдена');
      this.setState({
        serverResponseOfLogin: true
      }) 
    } else {
      console.log('Ошибка ==> ' + 'Неизвестная ошибка');
    }
  })
}
