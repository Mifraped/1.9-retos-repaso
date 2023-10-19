function evenNumbers(num:number):string{
    let cadena = ""
    for(let i = 1; i <= num; i++){
        if(i % 2 != 0) cadena += i + " "
    }
    return cadena
}
// console.log(evenNumbers(13));

function myRevert(myArr:string[]):string[]{
    let newArr:string[] = []
    for(let i = 0; i < myArr.length; i++){
        newArr.push(myArr[myArr.length - 1 - i])
    }
    return newArr
}
// console.log(myRevert(["dale", "la", "vuelta"]));

function isRainbow(colors:string[]):boolean[]{
    let newArr:boolean[] = []
    let rainbowColors:string[] = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"]
    for(let i = 0; i < colors.length; i++){
        rainbowColors.indexOf(colors[i]) >= 0 ? newArr.push(true) : newArr.push(false)
    }
    return newArr
}
// console.log(isRainbow(["rojo", "negro", "rosa", "añil", "morado", "violeta", "verde"]));

export function add(myWords:string[]):number{
    let suma:number = 0
    for(let i = 0; i < myWords.length; i++){
        suma += myWords[i].length
    }
    return suma
}
// console.log(add(["hasta", "luego", "lucas"]));

