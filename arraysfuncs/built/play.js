var names = [
    { name: "pito", age: 12 },
    { name: "chris", age: 22 },
    { name: "dan", age: 11 }
];
console.log(names.filter(function (val) { return val.age < 20; }));
console.log(names.reduce(function (prev, curr) { return curr.age + prev; }, 0));
//# sourceMappingURL=play.js.map