import { Point } from "./point";

let myPoint = new Point(5,9)

myPoint.setX(1)
myPoint.setY(3)
console.log(myPoint.getX());
console.log(myPoint.getY());
console.log(myPoint.toString());
console.log(myPoint.distanceToOrigin());
let point2 = new Point(0, -8)
console.log(myPoint.claculateDistance(point2));
console.log(myPoint.calculateQuadrant(), point2.calculateQuadrant());
