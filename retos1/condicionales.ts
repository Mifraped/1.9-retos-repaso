function functionZodiac(day:number, month:number):string{
    let signo
    if((day > 20 && day < 32) && month === 3 || (day > 0 && day < 20) && month === 4) signo = "Aries";
    else if((day > 19 && day < 31) && month === 4 || (day > 0 && day < 21) && month === 5) signo = "Tauro";
    else if((day > 20 && day < 32) && month === 5 || (day > 0 && day < 21) && month === 6) signo = "Geminis";
    else if((day > 20 && day < 31) && month === 6 || (day > 0 && day < 23) && month === 7) signo = "Cancer";
    else if((day > 22 && day < 32) && month === 7 || (day > 0 && day < 23) && month === 8) signo = "Leo";
    else if((day > 22 && day < 32) && month === 8 || (day > 0 && day < 23) && month === 9) signo = "Virgo";
    else if((day > 22 && day < 31) && month === 9 || (day > 0 && day < 23) && month === 10) signo = "Libra";
    else if((day > 22 && day < 32) && month === 10 || (day > 0 && day < 22) && month === 11) signo = "Escorpio";
    else if((day > 21 && day < 31) && month === 11 || (day > 0 && day < 22) && month === 12) signo = "Sagitario";
    else if((day > 21 && day < 32) && month === 12 || (day > 0 && day < 20) && month === 1) signo = "Capricornio";
    else if((day > 19 && day < 31) && month === 1 || (day > 0 && day < 19) && month === 2) signo = "Acuario";
    else if((day > 18 && day < 29) && month === 2 || (day > 0 && day < 21) && month === 3) signo = "Piscis";
    else signo ="No has introducido una fecha valida";
    return signo
}
// console.log(functionZodiac(23,3));

function continent(country:string):void{
    let America = ["Venezuela", "Brasil", "Mexico", "Canada", "EEUU"]
    let Europa = ["España", "Francia", "Turquia", "Noruega", "Grecia"]
    let Africa = ["Marruecos", "Sudafrica", "Mozambique", "Etiopia", "Congo"]
    let Asia = ["China", "Mogolia", "India", "Tailandia", "Camboya"]
    let Oceania = ["Australia", "Nueva Zelanda", "Samoa", "Indonesia", "Papua Nueva Guinea"]
    if(America.indexOf(country) >= 0) console.log("America");
    if(Europa.indexOf(country) >= 0) console.log("Europa");
    if(Africa.indexOf(country) >= 0) console.log("Africa");
    if(Asia.indexOf(country) >= 0) console.log("Asia");
    if(Oceania.indexOf(country) >= 0) console.log("Oceania"); 
}
// continent("Samoa")

export function isEven(number:number):string{
    return number % 2 === 0 ? "El numero es par" : "El numero es impar"
}
// console.log(isEven(3));

