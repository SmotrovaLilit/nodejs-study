var db = require('db');
db.connect();

var User = require('./user');

function run() {
    var vasa = new User("Вася");
    var peta = new User("Петя");
    vasa.hello(peta);

    console.log(db.getPhrase("Run successful"))
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}