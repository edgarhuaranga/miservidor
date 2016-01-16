var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send("Mi primer servidor :3");
});

app.get('/perfil',function(req, res){
	res.send("Mi perfil");
});

app.get('/amigos', function(req, res){
	res.send("Mis amiwis");
})

app.listen(3000);