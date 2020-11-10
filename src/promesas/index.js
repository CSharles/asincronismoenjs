const yaVerasLoQueVaAPasar=()=>{
     return new Promise((resolve,reject)=>{
         if(true){
             resolve('Hey')
         }
         else{
             reject('Whoops')
         }
     })
}


// const algoPasa = ()=>{
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve('Hola soy Resolve')
//         }
//         else{
//             reject('Lo siento no fue true')
//         }
//     })
// }

// algoPasa().then(response=>console.log(response))
// .catch(error=>console.error(error))

yaVerasLoQueVaAPasar()
    .then(response=>console.log(response))
    .catch(error=>console.error(error))

    const somethingWillHappen2= ()=>{
        return new Promise((resolve,reject)=>{
            if(true){
                setTimeout(()=>{
                    resolve('Hey me tarde')
                },2000)
            }
            else{
                const error= new Error('No se pudo')
                reject(error)
            }
        })
    }

    somethingWillHappen2().then(response=>console.log(response))
    .catch(error=>console.error(error))

Promise.all([yaVerasLoQueVaAPasar(),somethingWillHappen2()]).then(response=>{
    console.log('Arreglo de promesas',response)
}).catch(error=>console.error(error))