"use strict";
exports.__esModule = true;
var a = 5;
var fullname = "tyyy";
var arry;
arry = ["1", "2"];
//tuples
var address;
address = [5];
console.log(a, fullname, arry);
var p;
var p1;
//union
p1 = { name: "455", age: 78 };
var c = 6;
var p3;
p3 = { name: "dfg", age: 67 };
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car("tyy");
c1.getBrand();
var CarX = /** @class */ (function () {
    function CarX(brand1) {
        this.brand1 = brand1;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand1);
    };
    return CarX;
}());
var c4 = new CarX("bmw");
c4.getBrand();



