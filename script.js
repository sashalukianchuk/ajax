const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.listen(3000);

app.use(express.static('public'));

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/user', urlencodedParser, (req, reply) => {
    console.log(req.body.data + " **Get");
    reply.status(200).send("user get is delivered");
});

app.post('/user', urlencodedParser,(req, reply)=>{
    if(req.header["user-agent"] != "Safari/537.36"){
        console.log(req.body.data + "  **post");
        console. log(req.headers.origin); 
        reply.status(200). send("user past is delivered");
        console. log("not a chrome")  
    }else{
        console. log("chrome want to accesst access is denied")
    }
});