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
    public calculateDistance(anotherPoint:Point):number{
        return Math.sqrt(Math.pow(this.x - anotherPoint.x, 2) + Math.pow(this.y - anotherPoint.y, 2))
    }
    public calculateQuadrant():number{
        let cuadrante = 0
        if(this.x > 0 && this.y > 0) cuadrante = 1
        else if(this.x < 0 && this.y > 0) cuadrante = 2
        else if(this.x < 0 && this.y < 0) cuadrante = 3
        else if(this.x > 0 && this.y < 0) cuadrante = 4

        return cuadrante
    }
    public calculateNearest(points:Point[]):Point{
        let distanciaMenor = Number.MAX_VALUE
        let puntoMenor = new Point(0,0)
        for(let punto of points){
            let distancia = this.calculateDistance(punto)
            if(distancia < distanciaMenor){
                distanciaMenor = distancia
                puntoMenor = punto
            }
        }
        return puntoMenor
    }
}