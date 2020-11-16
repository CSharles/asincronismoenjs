const fetchData = require('../utils/fetch')
const API='https://rickandmortyapi.com/api/character/'

const buscarEnApi = async (url_api)=>{
    try {
        const data= await fetchData(url_api)
        const personaje = await fetchData(`${API}${data.results[0].id}`)
        const origen= await fetchData(personaje.origin.url)
        console.log(data.info.count)
        console.log(personaje.name)
        console.log(origen.dimension)
    } catch (error) {
        console.error(error)
    }
}
console.log('Antes')
buscarEnApi(API)
console.log('Despues')