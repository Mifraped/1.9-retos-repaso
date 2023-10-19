import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let mobile1 = new Mobile("Juana", "Iphone", "28", "plateado", 5000)
let mobile2 = new Mobile("Jonatan", "Motorola", "53t", "negro", 50)
let mobile3 = new Mobile("Manolete", "Alcatel", "200", "blanco", 125)
let mobile4 = new Mobile("Burgundofila", "Oppo", "SRT4", "negro", 250)

let mobileList = [mobile1, mobile2, mobile3, mobile4]

let myCollection = new MobileCollection(mobileList)

myCollection.setTotalPrice(5430)
myCollection.setMobiles([new Mobile("Justino", "Huawei", "TS10", "blanco", 135), new Mobile("Nelson", "Xiaomi", "80A", "Gris", 530)])

console.log(myCollection.getTotalPrice());
console.log(myCollection.getMobiles());

let myCollection2 = new MobileCollection([mobile1, mobile2])
console.log(myCollection2.getTotalPrice());
