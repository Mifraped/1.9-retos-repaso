import { Point } from "./point";

export class Triangle{
    constructor(private vertex1:Point, private vertex2:Point, private vertex3:Point){
        this.vertex1 = vertex1
        this.vertex2 = vertex2
        this.vertex3 = vertex3
    }
    public calculateLengthSides():number[]{
        let array:number[] = []
        array.push(this.vertex1.calculateDistance(this.vertex2))
        array.push(this.vertex2.calculateDistance(this.vertex3))
        array.push(this.vertex1.calculateDistance(this.vertex3))     
        return array
    }
}