function sum(num1,num2){
    return num1+num2
}

function calcular(val1, val2, callback){
    return callback(val1,val2)
}
console.log(calcular(2,3,sum))

function fecha(callback){
    console.log(new Date)
    setTimeout(()=>{
        let f= new Date
        callback(f)
    }, 3000)
}

function printFecha(FechaAhora){
    console.log(FechaAhora)
}

fecha(printFecha)
