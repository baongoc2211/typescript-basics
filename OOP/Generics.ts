//Regular Func
// Generic Func
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }
// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }
// function printBoolean(
//   item: boolean,
//   defaultValue: boolean
// ): [boolean, boolean] {
//   return [item, defaultValue];
// }
// kiểu dữ liệu nào cũng được
// function printNumber(item: any, defaultValue: any): [any, any] {
//   return [item, defaultValue];
// }
// // const num = printNumber(12, 20);
// // const str = printString("Hello", "World");
// // const bool = printBoolean(true, false);
// const num = printNumber(1, "something");
// console.log(num);
// console.log(str);
// console.log(bool);
//--------------------------------------------------------------
// function uniqueDataTypesFunc<Type>(
//   item: Type,
//   defaultValue: Type
// ): [Type, Type] {
//   return [item, defaultValue];
// }
// const res = uniqueDataTypesFunc<number>(10, 20);
// const str = uniqueDataTypesFunc<string>("Hello", "World");
// const bool = uniqueDataTypesFunc<boolean>(true, false);
// console.log(res);
// console.log(str);
// console.log(bool);
// function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
//   return [item, defaultValue];
// }
// interface Dog {
//   name: string;
//   breed: string;
// }
// const dog1 = uniqueDataTypesFunc<Dog>(
//   { name: "Buddy", breed: "Labrador" },
//   { name: "Default", breed: "Unkonw" }
// );
// console.log(dog1);
//-----------------------------------------------------------
//2:31:42
