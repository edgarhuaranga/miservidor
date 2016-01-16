var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

app.get("/", function(req, res){
	res.send("My first service :3");
});

var generarUsuario = function(){
	var randomName = faker.name.findName();
	var randomEmail = faker.internet.email();
	var randomImage = faker.image.avatar();
	return {
		nombre: randomName,
		email: randomEmail,
		imagen: randomImage
	};
};

var generarImagen = function(){
	var randomImage = faker.image.avatar();
	return {
		imagen:randomImage
	};
};

var generarObjeto = function(){
	var uid = faker.random.uuid();
	var nombreAleatorio = faker.name.findName();
	var contenidoAleatorio = faker.lorem.sentence();
	var fechaAleatoria = faker.date.past(); 
	var image = faker.image.image();
	return {
		id: uid,
		nombre: nombreAleatorio,
		contenido: contenidoAleatorio,
		fecha: fechaAleatoria,
		imagen: image	
	};
};

app.get("/friends", function(req, res){
	var cantidad = _.random(5, 10);
	var usuarios = _.times(cantidad, generarUsuario);
	res.json(usuarios);
});

app.get('/random', function(req, res){
	var cantidad = _.random(5,100);
	var imagenes = _.times(cantidad, generarImagen);
	res.send(imagenes);
});

app.get('/posts', function(req, res){
	var cantidad = _.random(5, 50);
	var objetos = _.times(cantidad, generarObjeto);
	res.send(objetos)
});

app.listen(3000);