// public, private, protected
class Person {
  //public first: string;
  public first: string;
  public last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}
let p1 = new Person("Ngoc", "Ngoc2");
console.log(p1.first);
