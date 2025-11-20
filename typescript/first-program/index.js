"use strict";
// function hello(name:string | number){
//     console.log("Hello",name);
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: "Kaushal",
    age: 18,
    greet: function (name) {
        return `Hello ${this.name}`;
    }
};
console.log(person.name, person.greet("coder"));
//# sourceMappingURL=index.js.map