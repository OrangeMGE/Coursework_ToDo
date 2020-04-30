var http = require('http');
var express = require('express')
var app = express();
var fs = require('fs'); //Файл-менеджер
const sql = require('mssql'); //MS-SQL 

const Database_config = {
    server: "localhost",
    user: "sa",
    database: "course",
    password: "Vetel123123GEOrange123123"
}

let usersGet = {
    id : 0,
    username : "",
    password : ""
};

console.log("\n\n\n");
console.log("----------- Started -----------");

app.use((require,response,next) => {
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers","Content-Type");
    if(require.method == 'OPTIONS'){
        return response.status(200).send('ok');
    }
    next();
}).get('/login&:username/:password', (require,response) => { //GET - Запрос на вход
    debugProcessing(require.url);
    usersGet = {
        username: require.params.username,
        password: require.params.password,
    }

    let dataCheck = new Promise( (resolve,reject) => { //Промис, проверка на существование записи в БД
        sql.connect(Database_config).then(() => {
            return sql.query`select * from users where username=${usersGet.username} and password=${usersGet.password}`
        }).then(result => {
            //console.dir(result);
            console.log("\nUser ID: " + result.recordset[0].id);
            usersGet.id = result.recordset[0].id;
            if(result.rowsAffected != 1) {
                reject("User not found");
            } else {
                resolve("User found");
            }
        }).catch(err => {
            console.log("Promise-[SQL] --> Error: " + err);
            reject();
        })
    })
    .then( (consoleInfo)=> { 
        console.log("[Database] --> " + consoleInfo);
        response.status(200).send("Succesful");  //Заменить
    }) 
    .catch( (err) => { 
        console.log("[Database] --> " + err);
        response.sendStatus(404)
    })
}).get('/todo', (require,response) => { //Запрос всех тасков
    let dataCheck = new Promise( (resolve,reject) => {
        sql.connect(Database_config).then(() => {
            return sql.query`select * from usersTasks where id=${usersGet.id}`
        }).then(result => {
            console.dir(result);
            resolve( result.recordsets[0] );
        }).catch(err => {
            console.log("Promise-[SQL] --> Error: " + err);
            reject();
        })
    })
    .then( (result)=> { 
        console.log("[Database] --> Database is assigned ");
        response.status(200).send(result);
    }) 
    .catch( (err) => { 
        console.log("[Database] --> " + err);
        response.sendStatus(404)
    })
})

function debugProcessing(urladdress) {  //Дебаг в консоль
    console.log('        Processing -->  ' + urladdress);
}



const listningPort = 4000;
app.listen(listningPort);
console.log('[Server] --> server is create\nListning port: ' + listningPort);