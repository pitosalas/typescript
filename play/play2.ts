class Animal {
	constructor(public name: string) { }
	move(meters: number) {
		console.log(this.name + " moved " + meters + "m.");
	}
}

var a = new Animal("x");
a.name = "YYY";
a.move(100);
console.log(Math.random());