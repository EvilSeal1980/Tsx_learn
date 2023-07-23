let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published = true;
let level;

function render(document: any) {
  console.log(document);
}

//Arrays
let numbers: (string | number)[] = [1, 2, "3"];
numbers.forEach((n) => n.toString());

//Tuples
let user: [number, string] = [1, "Abhi"];

//Enums - generate a list of releated constants
const small = 1;
const medium = 2;
const large = 3;

enum Size {
  Small = 1,
  Medium,
  large,
} //default starts from 0
let mySize: Size = Size.Medium;
console.log(mySize);

function calcTax(income: number, taxYear?: number, taxYearDef = 2023): number {
  //return type --> func(): number
  if (income <= 10000) {
    return income * 0.1;
  }
  return income * 0.2;
}

console.log(calcTax(10_000));

//Object
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = { id: 1, name: "Abhi", retire: (date: Date) => console.log(date) };
