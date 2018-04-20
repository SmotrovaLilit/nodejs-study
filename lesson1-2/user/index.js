var phrases = require('db');
var log = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
   log(phrases.getPhrase("Hello") + ", " + who.name)
};

module.exports = User;