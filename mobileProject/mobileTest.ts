import { Mobile } from "./mobile";

let myMobile = new Mobile("Paquito", "Samsung", "J45", "negro", 250)

myMobile.setName("Julian")
myMobile.setTrademark("Nokia")
myMobile.setModel("22 10")
myMobile.setColor("blanco")
myMobile.setPrice(195)

console.log(myMobile.getName());
console.log(myMobile.getTrademark());
console.log(myMobile.getModel());
console.log(myMobile.getColor());
console.log(myMobile.getPrice());

let mobile1 = new Mobile("Juana", "Iphone", "28", "plateado", 5000)
let mobile2 = new Mobile("Jonatan", "Motorola", "53t", "negro", 50)
let mobile3 = new Mobile("Manolete", "Alcatel", "200", "blanco", 125)

let myMobiles = [mobile1, mobile2, mobile3]

myMobiles.forEach(elem => console.log(elem.toString()))
