import { Mobile } from "./mobile";

export class MobileCollection{
    private totalPrice: number
    constructor(private mobiles: Mobile[]){
        this.mobiles = mobiles
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
}