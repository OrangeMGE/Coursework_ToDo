var http = require('http');
var express = require('express')
var app = express();



app.use((require,response,next)=>{
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers","Content-Type");
    if(require.method == 'OPTIONS'){
        return response.status(200).send('ok');
    }
    next();
}).get('/login&:username/:password', (require,response) => {
    debugProcessing(require.url);
    response.status(200).send({
        username: require.params.username,
        password: require.params.password
    })
});


function debugProcessing(urladdress) { 
    console.log('        Processing -->  ' + urladdress);
}

const listningPort = 4000;
app.listen(listningPort);
console.log('[Server] --> server is create\nListning ' + listningPort);