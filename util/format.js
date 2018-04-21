var util = require('util');

var s = util.format("%s-%d-%j", "string", 1, {test: "obj"});
console.log(s);
console.log("%s-%d-%j", "string", 1, {test: "obj"});