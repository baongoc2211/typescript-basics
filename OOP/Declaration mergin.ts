//1//
// interface Computer {
//   name: string;
//   ram: number;
//   hdd: number;
// }
// const computerExample: Computer = {
//   name: "i7",
//   ram: 8,
//   hdd: 100,
// };
// console.log(computerExample.name);
// console.log(computerExample.ram);
// console.log(computerExample.hdd);
//2//
// interface Movie {
//   readonly name: string;
//   ratings: number;
//   genra?: string;
// }
// const movie1: Movie = {
//   name: "start Wars",
//   ratings: 8.9,]
// };
// // console.log(movie1);
// movie1.name = `some ohter movie`;
// readonly không được thay đổi
// ? được bỏ trống
//3//
// interface MathOperation {
//   (x: number, y: number): number;
// }
// const add: MathOperation = (a, b) => a + b;
// const subtract: MathOperation = (a, b) => a - b;
// console.log(add(2, 2));
// console.log(subtract(5, 5));
//4//
// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
//   sayHello(): void;
// }
// function greet(person: Person) {
//   console.log(`Hello, ${person.firstName} ${person.lastName}`);
//   person.sayHello();
// }
// const ngoc: Person = {
//   firstName: `Ngoc`,
//   lastName: `Bao`,
//   age: 30,
//   sayHello() {
//     console.log(`Hi Dev`);
//   },
// };
// const nano: Person = {
//   firstName: `nano`,
//   lastName: `desi`,
//   age: 30,
//   sayHello() {
//     console.log(`What's good`);
//   },
// };
// greet(ngoc);
// greet(nano);

//5//
// interface Song {
//   songName: string;
//   singerName: string;
//   printSongInfo(songName: string, singerName: string): string;
// }
// const song1: Song = {
//   songName: "Natural",
//   singerName: "Imagin Drigon",
//   printSongInfo: (songName, singerName) => {
//     return `Song: ${songName}, Singer: ${singerName}`;
//   },
// };
// console.log(song1.printSongInfo("Natural", "Imagin Drigon"));

//6 Kế thừa//
// interface MovieDetails {
//   readonly name: string;
//   ratings: number;
//   printMovieInfo(name: string, price: number, rating: number): string | number;
// }
// interface MovieGenra extends MovieDetails {
//   genra: string;
// }
// const movie1: MovieGenra = {
//   name: "Star Wars",
//   genra: "Action",
//   ratings: 8.9,
//   printMovieInfo(
//     name: string,
//     price: number,
//     ratings: number
//   ): string | number {
//     return `Movie name: ${name} Price: ${price} Rating: ${ratings}`;
//   },
// };
// const res = movie1.printMovieInfo(`John Wick`, 100, 8);
// console.log(res);
//7//
// interface Vehicle {
//   start(): void;
//   stop(): void;
// }
// class Car implements Vehicle {
//   start(): void {
//     console.log(`Car is starting ...`);
//   }
//   stop(): void {
//     console.log("Car is stopped");
//   }
// }
// const myCar = new Car();
// myCar.start();
// myCar.stop();
//8 Original Interface
// interface Car {
//   brand: string;
//   start(): void;
// }
// // Declaration merging (interface extension)
// interface Car {
//   model: string;
//   stop(): void;
// }
// const myCar: Car = {
//   brand: "BMW",
//   model: "M3",
//   start() {
//     console.log(`Start`);
//   },
//   stop() {
//     console.log(`Stop`);
//   },
// };
// console.log(myCar.start());
// myCar.start();
// myCar.stop();
