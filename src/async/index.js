const hacerAlgoAsync= () =>{
    return new Promise((resolve,reject)=>{
        (true)
        ?setTimeout(()=>resolve('Hice algo async'),3000)
        :reject(new Error('Test Error'))
    })
}

const hacerAlgo= async ()=>{
    const hasAlgoAsync= await hacerAlgoAsync()
    console.log(hasAlgoAsync)
}

console.log('Antes')
hacerAlgo()
console.log('Despues')

const otrafuncion = async()=>{
    try {
        const haceAlgoAsync= await hacerAlgoAsync()
        console.log(haceAlgoAsync)
    } catch (error) {
        console.error(error)
    }
}
console.log('Antes 1')
otrafuncion()
console.log('Despues 1')

//prueba yo

// const funcionQueSeVaATardarMucho= ()=>{
//     new Promise((resolve,reject)=>{
//         (true)
//         ?setTimeout(()=>resolve('Aqui trabajando duro'),3000)
//         :reject(new Error('Hubo un error'))
//     })
// }

// const funcionAsincrona = async ()=>{
//     try {
//         const funcionQueSeTarda = await funcionQueSeVaATardarMucho()
//         console.log(funcionQueSeTarda)
//     } catch (error) {
//         console.error(error)
//     }
// }