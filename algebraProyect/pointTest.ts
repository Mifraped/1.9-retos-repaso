import { Point } from "./point";

let myPoint = new Point(8,4)

myPoint.setX(1)
myPoint.setY(3)
console.log(myPoint.getX());
console.log(myPoint.getY());
console.log(myPoint.toString());
console.log(myPoint.distanceToOrigin());
let point2 = new Point(0, -8)
console.log(myPoint.calculateDistance(point2));
console.log(myPoint.calculateQuadrant(), point2.calculateQuadrant());

let point3 = new Point(-20, -40)
let point4 = new Point(2, 2)
let point5 = new Point(15, -20)
console.log(myPoint.calculateNearest([point2, point3, point4, point5]));
