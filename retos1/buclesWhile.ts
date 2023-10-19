function hasEven(myNums:number[]):boolean{
    let i = 0
    while(i < myNums.length){
        if(myNums[i] % 2 === 0) return true
        i++
    }
    return false
}
console.log(hasEven([1,3,5,7,9,2]));

function startWithM(myNames:string[]):boolean{
    let i = 0
    let contador = 0
    while(i < myNames.length){
        if(myNames[i][0] === "M") contador += 1
        i++
    }
    return contador === myNames.length? true : false
}
console.log(startWithM(["Miguel", "Maricarmen", "Manuel", "maria"]));

