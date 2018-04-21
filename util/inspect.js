var util = require('util');
//Object toString example

var obj = {
    a: 5,
    b: 6
};
obj.self = obj;

console.log(util.inspect(obj));
console.log(obj);


var obj2 = {
    a: 5,
    b: 6,
    inspect: function () {
        return util.format("a:%d,b:%d", 5, 6)
    }
};

console.log(obj2);