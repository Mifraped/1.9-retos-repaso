import { Triangle } from "./triangle";
import { Point } from "./point";

let myTriangle = new Triangle(new Point(-20, -40), new Point(30, -60), new Point(50, 10))

console.log(myTriangle.calculateLengthSides());
