var util = require('util');

var phrases = {
    "Hello" : "Привет",
    "world" : "мир"
};

function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HTTPError(status, message) {
    this.message = message;
    this.status = status;
    Error.captureStackTrace(this, HTTPError);
}
util.inherits(HTTPError, Error);
HTTPError.prototype.name = 'HTTPError';

function getPhrases(name) {
    if (!phrases[name]) {
        throw new PhraseError("Нет такой фразы " + name);
    }

    return phrases[name];
}

function makePage(url) {
    if (url !== "index.html") {
        throw new HTTPError(404, "Нет такой страницы");
    }

    return util.format("%s, %s!", getPhrases("Hello1"), getPhrases("world"))
}

try {
    var page = makePage("index.html");
    console.log(page);
    var page2 = makePage("index");
    console.log(page2);
} catch (e) {
    if (e instanceof HTTPError) {
        console.log(e.status, e.message)
    } else {
        console.error("Ошибка: %s\nСообщение: %s\nСтек: %s:\n", e.name, e.message, e.stack)
    }
}
