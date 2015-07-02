module Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  var lettersRegexp = /^[A-Za-z]+$/;
  var numbersRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numbersRegexp.test(s);
    }
  }
}


// Some examples
var strings = ['hello', '12345', '101'];

var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters'] = new Validation.LettersOnlyValidator();

// Do they pass

strings.forEach(s => {
	for (var name in validators) {
		console.log('"' + s + '" ' +
			(validators[name].isAcceptable(s) ?
				' matches ' : ' doesnt match ') + name);
	}
});
