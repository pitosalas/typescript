var lettersRegexp = /^[A-Za-z]+$/;
var numbersRegexp = /^[0-9]+$/;
var LettersOnlyValidator = (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
})();
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numbersRegexp.test(s);
    };
    return ZipCodeValidator;
})();
// Some examples
var strings = ['hello', '12345', '101'];
var validators = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters'] = new LettersOnlyValidator();
// Do they pass
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' +
            (validators[name].isAcceptable(s) ?
                ' matches ' : ' doesnt match ') + name);
    }
});
