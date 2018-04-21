var util = require('util');

function Animal(name) {
    this.name = name
}

Animal.prototype.walk = function () {
    console.log("Ходит " + this.name)
};

function Rabbit(name) {
    this.name = name
}

Rabbit.prototype.jump = function () {
    console.log("Прыгает " + this.name)
};

util.inherits(Rabbit, Animal);

var rabbit = new Rabbit("кролик");
rabbit.walk();
rabbit.jump();