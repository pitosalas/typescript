var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var a = new Animal("x");
a.name = "YYY";
a.move(100);
console.log(Math.random());
