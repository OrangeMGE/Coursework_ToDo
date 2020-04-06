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

    let dataCheck = new Promise( (resolve,reject) => { //Промис, проверка на существование записи в БД
        sql.connect(Database_config).then(() => {
            return sql.query`select * from users where username=${usersGet.username} and password=${usersGet.password}`
        }).then(result => {
            //console.dir(result);
            //console.log(result.recordset[0].password);

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
});

function debugProcessing(urladdress) {  //Дебаг в консоль
    console.log('        Processing -->  ' + urladdress);
}



const listningPort = 4000;
app.listen(listningPort);
console.log('[Server] --> server is create\nListning ' + listningPort);