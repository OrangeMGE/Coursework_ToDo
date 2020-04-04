var http = require('http');
var express = require('express')
var app = express();
var fs = require('fs'); //Файл-менеджер

const mysql = require("mysql2");



app.use((require,response,next) => {
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers","Content-Type");
    if(require.method == 'OPTIONS'){
        return response.status(200).send('ok');
    }
    next();
}).get('/login&:username/:password', (require,response) => {
    debugProcessing(require.url);
    let usersGet = {
        username: require.params.username,
        password: require.params.password
    }
    response.send(200);
});

function debugProcessing(urladdress) { 
    console.log('        Processing -->  ' + urladdress);
}

const listningPort = 4000;
app.listen(listningPort);
console.log('[Server] --> server is create\nListning ' + listningPort);