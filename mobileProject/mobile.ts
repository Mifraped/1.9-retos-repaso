export class Mobile{
    constructor(private name:string, private trademark:string, private model:string, private color:string, private price:number){
        this.name = name
        this.trademark = trademark
        this.model = model
        this.color = color
        this.price = price
    }
    public setName(newName:string):void{
        this.name = newName
    }
    public setTrademark(newTrademark:string):void{
        this.trademark = newTrademark
    }
    public setModel(newModel:string):void{
        this.model = newModel
    }
    public setColor(newColor:string):void{
        this.color = newColor
    }
    public setPrice(newPrice:number):void{
        this.price = newPrice
    }
    public getName():string{
        return this.name
    }
    public getTrademark():string{
        return this.trademark
    }
    public getModel():string{
        return this.model
    }
    public getColor():string{
        return this.color
    }
    public getPrice():number{
        return this.price
    }
    public toString():string{
        let cadena = "The characteristics of the mobile name are:" + "\n"
        for(let carac in this){
            if(typeof this[carac] !== "function") cadena += carac + ": " + this[carac] + "\n"
        }
        return cadena
    }
}