export class Point{
    constructor(private x:number, private y:number){
        this.x = x
        this.y = y
    }
    public setX(newX:number):void{
        this.x = newX
    }
    public setY(newY:number):void{
        this.y = newY
    }
    public getX():number{
        return this.x
    }
    public getY():number{
        return this.y
    }
    public toString():string{
        return `(${this.x},${this.y})`
    }
    public distanceToOrigin():number{
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
    public claculateDistance(anotherPoint:Point):number{
        return Math.sqrt(Math.pow(this.x - anotherPoint.x, 2) + Math.pow(this.y - anotherPoint.y, 2))
    }
}