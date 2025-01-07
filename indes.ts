//1//Strings
// let myName: string = "Bao Ngoc";
// myName = "something other person";
// console.log(myName);

import { Console } from "console";

// // Numbers
// let bavNumber: number = 12;
// console.log(bavNumber);

// //Boolean
// let tsHard: boolean = false;
// tsHard = 12;
// console.log(tsHard);

//2// let tech = "TypeScript";
// let bavNumber = 8;
// let tsHard = true;
// ("");
// // In ra dữ liệu của parameotor
// // console.log(tech);
// // console.log(bavNumber);
// // console.log(tsHard);

// // In ra kiểu dữ liệu của parametor đó
// console.log(typeof tech);
// console.log(typeof bavNumber);
// console.log(typeof tsHard);

//3// có thể có nhiều kiểu dữ liệu nếu có một kiểu dữ liệu
// thì thay any thành kiểu dữ liệu mong muốn ví dụ string, number
// let color: any = "crimson";
// color = 20;
// color = true;
// color();
// console.log(color);

//4// Regular Function
// function addOne(num: number) {
//   return num + 1;
// }
// const res = addOne(3);
// console.log(res);

//5//Arrow Func
// const double = (x: number, y: number) => x * y;
// const res = double(2, 10);
// console.log(res);

//6//
// function greet(person: string = "Anonoymous") {
//   return "Hello ${person}";
// }
// const res = greet("BaoNgoc");
// console.log(res);

//7// Regular Func
// function double1(x: number) {
//   return x * x;
// }
// const res = double1(2);
// console.log(res);

//8//Arrow Func
// const doubl2 = (x: number): number => x * x;
// console.log(doubl2(2));

//
// function printMessage(message: string): void {
//   console.log(`This is my ${message}`);
//   return message;
// }
// printMessage("message");

//9//
// function printMessage(mesage: string): void {
//   console.log("This is my ${message}");
// }
// printMessage("message");

//10/Vòng lặp vô hạn
// function throwError(msg: string): never {
//   throw new Error(msg);
// }
// function infiniteLoop(): never {
//   while (true) {}
// }
// let x: never;
// function neverReturns(): never {
//   while (true) {}
// }
// x = neverReturns();

//Arrays Types//
// Using the square bracket notation [] to indicate an array of a specific type
// Using the generic Array<type> notation to indicate an array of a specific type
// const nums: number[] = [1, 2];
// const str: string[] = [`one`, `two`, `three`];
// console.log(str);
// const items: string[] = [];
// items.push("keyboard");
// console.log(items);
// const numList: number[] = [];
// numList.push(20);
// console.log(numList);

// const items: Array<string> = [];
// console.log(items);

//Multi Dimensional//Mang da chieu
// const singleDi: number[] = [1, 2, 3, 4, 5];
// const multiDi: number[][] = [[1, 2, 3, 4, 5]];
// const triple: number[][][] = [[[1, 2, 3, 4, 5]]];
// console.log(singleDi);
// console.log(multiDi);
// console.log(triple);

//Object// Đối tượng
// const person: { firstName: string; lastName: string; age: number } = {
//   firstName: "Ngoc",
//   lastName: "Bao",
//   age: 20,
// };
// console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
// function printUser(): { name: string; age: number; location: string } {
//   return {
//     name: "Ngoc",
//     age: 20,
//     location: "VietNam",
//   };
// }
// const res = printUser();
// console.log(res);

//Type Aliases//
// type User = {
//   name: string;
//   age: number;
//   location: string;
// };
// const printUserInfo = (user: User) => {
//   return `Name: (${user.name}) Age:(${user.age}) Location: (${user.location})`;
// };
// const res = printUserInfo({ name: "Ngoc", age: 20, location: "VietNam" });
// console.log(res);

//Optional Properties//
//? co the bo trong
//readonly khong the thay doi gia tri
// type User = {
//   name: string;
//   age?: number;
//   readonly location: string;
// };
// const user: User = {
//   name: "Ngoc",
//   age: 20,
//   location: "VietNam",
// };
// console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);

//Intersection Types//
// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };
// type AccountDetails = {
//   email: string;
//   password: string;
// };
// // ket hop ca hai doi tuong
// type User = UserInfo & AccountDetails;
// const Ngoc: User = {
//   first: "Ngoc",
//   last: "Bao",
//   age: 20,
//   email: "<email@gmail.com",
//   password: "abc@123",
// };
// console.log(
//   `Name: ${Ngoc.first} Last: ${Ngoc.last} Age: ${Ngoc.age} Email: ${Ngoc.email} Password: ${Ngoc.password}`
// );

//Unions// Khong bat buoc co het thuoc tinh cua cac doi tuong
// let password: string | number = 20;
// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };
// type AccountDetails = {
//   email: string;
//   password: string;
// };
// let user: UserInfo | AccountDetails = {
//   first: "Ngoc",
//   last: "Bao",
//   age: 20,
// };
// let user: UserInfo | AccountDetails = {
//   email: `ngoc.@gmail.com`,
//   password: `abc@123`,
// };
// const items: (number | string)[] = [1, 2, 3, `hello`];
// console.log(items);

// Literal Types//
// let color: `red` | "crimson" | "busha";
// color = "red";
// console.log(color);
// let password: "secretpassword" = "secretpassword";
// console.log(password);

//Tuples//tương tự mảng nhưng dãy hữu hạn
// let myTuple: [number, string];
// myTuple = [10, "Hello World"];
// console.log(myTuple);
// const products: (number | string)[] = ["item 1", 12];
// console.log(products);
// kiểu dữ liệu từng vị trí trong mảng
// const games: [string, number, string] = ["Game 1", 2, "Game 3"];
// console.log(games);

//Enums//
// enum WeatherConditions {
//   Sunny,
//   Cloudy,
//   Rainy,
// }
// console.log(WeatherConditions.Rainy);
// khi chua gán giá trị run sẽ ra vị trí
// enum WeatherConditions {
//   Sunny = `sunny`,
//   Cloudy = `cloudy`,
//   Rainy = "rainy",
//   Snowy = "snowy",
// }
// console.log(WeatherConditions.Rainy);
// // khi đã gán gía trị sẽ in ra giá trị tương ứng với biến
// const currentWeather = WeatherConditions.Snowy;
// console.log(`The current weather is ${currentWeather}`);
