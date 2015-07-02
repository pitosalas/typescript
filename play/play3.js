var Point = (function () {
    function Point(x, y, name) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
    Point.prototype.area = function () { return this.x * this.y; };
    return Point;
})();
var p = new Point(100, 200, "pito");
console.log(p.area());
console.log(p.name);
console.log(type p);
