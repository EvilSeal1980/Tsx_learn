"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, "3"];
numbers.forEach((n) => n.toString());
let user = [1, "Abhi"];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calcTax(income, taxYear, taxYearDef = 2023) {
    if (income <= 10000) {
        return income * 0.1;
    }
    return income * 0.2;
}
console.log(calcTax(10000));
let employee = { id: 1, name: "Abhi", retire: (date) => console.log(date) };
let employeeT = {
    id: 1,
    name: "Abhi",
    retire: (date) => console.log(date),
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
//# sourceMappingURL=index.js.map