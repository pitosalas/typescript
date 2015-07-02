var names = [
    {name: "pito", age: 12},
    { name: "chris", age: 22 },
    { name: "dan", age: 11}
];

console.log(names.filter((val) => { return val.age < 20 }))

console.log(names.reduce( (prev, curr) => { return curr.age + prev }, 0));
