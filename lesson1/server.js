var user = require('./user');

var vasa = new user.User("Вася");
var peta = new user.User("Петя");

vasa.hello(peta);