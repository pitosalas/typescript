var diff = new Date('Feb 11 2015').getTime() -  new Date('Mar 18 2015').getTime();
var day = 1000*60*60*24;
diff = diff / day;
console.log(diff);

diff = new Date('Apr 22 2015').getTime() -  new Date('Mar 18 2015').getTime();
diff = diff / day;
console.log(diff);

var x:number[] = [];
x.push(12);
console.log(x);
interface A
  {
    x:string; y:string
  };

var a: A[] = [];
a.push({x: "a", y: "b"});
a.slice(-1)[0]["x"] = "foo";
console.log(a.slice(-1)[0]);
console.log(a);

var x: number[] = [1,2,3];

for (var y of x)  {

  console.log( y);
}
