interface XPoint {
	x: number;
	y: number;
	name: string;
	area(): number;
	l?: boolean;
}

class Point implements XPoint {
	x: number;
	y: number;
	area(): number { return this.x * this.y}
	constructor(x: number, y: number, public name?: string) {
		this.x = x;
		this.y = y;
	}
}

let p = new Point(100, 200, "pito");
console.log(p.area());
console.log(p.name);
console.log(typeof p);
