import { Mobile } from "./mobile";

export class MobileCollection{
    private totalPrice: number
    constructor(private mobiles: Mobile[]){
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }
    public setMobiles(newMobiles:Mobile[]):void{
        this.mobiles = newMobiles
    }
    public setTotalPrice(newTotalPrice:number):void{
        this.totalPrice = newTotalPrice
    }
    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public getTotalPrice():number{
        return this.totalPrice
    }
    private totalPriceCalculation():number{
        return this.mobiles.reduce((acum, act) => acum + act.getPrice(), 0)
    }
}