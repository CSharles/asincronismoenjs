let XMHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API='https://rickandmortyapi.com/api/character/'

function fetchData(url_api,callback){
    let xhttp= new XMHttpRequest()
    xhttp.open('GET',url_api,true)
    xhttp.onreadystatechange=function(evento){
        if(xhttp.readyState===4){
            if(xhttp.status===200){
                callback(null,JSON.parse(xhttp.responseText))
            }
            else{
                const error= new Error('Error: '+ url_api)
            }
        }
    }
    xhttp.send()
}

fetchData(API,function(error1,data1){
    if(error1)return console.error(error1)
    fetchData(API+data1.results[0].id,function(error2,data2){
        if(error2) return console.error(error2)
        fetchData(data2.origin.url,function(error3,data3){
            if(error3) return console.error(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})

// fetchData(API,function(error1,data1){
//     if(error1)console.error(error1)
//     fetchData(APLI+data1.results[0],function(error2,data2){
//         if(error2)console.error(error2)
//         fetchData(data2.origin.url,function(error3,data3){
//             if(error3)console.error(error3)
//             console.log(data1.info)
//             console.log(data2.name)
//             console.log(Data3.dimension)
//         })
//     })
// })