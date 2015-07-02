function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Jane", lastnxame: "FOobar", age: 11 };
document.body.innerHTML = greeter(user);
