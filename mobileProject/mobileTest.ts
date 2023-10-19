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
