import { type } from "express/lib/response";

let a: number = 5;
let fullname: string = "tyyy";
let arry: string[];
arry = ["1", "2"];
//tuples
let address: [name: number, age?: string];
address = [5];
console.log(a, fullname, arry);
//interface
interface Person {
  name: string;
  age: number;
}
interface Student {
  rollno: string;
}
let p: Person & Student;
let p1: Person | Student;
//union
p1 = { name: "455", age: 78 };
//intersection

//type alias

type count = string | number;
let c: count = 6;

//never
type count1 = string & number;

interface Person {
  name:string;
  age:number;
}
interface Student {
  name:string;
  rollno1:number;
}
let p3:Person|Student;
p3={name:"dfg",age:67}

class Car{
  brand;
  constructor(brand){
    this.brand=brand;
  }
  getBrand(){
    console.log(this.brand)
  }
}
let c1=new Car("tyy")
c1.getBrand();

class CarX{
  brand;
  constructor(public brand1){
  }
  getBrand(){
    console.log(this.brand1)
  }
}
let c4=new CarX("bmw")
c4.getBrand();