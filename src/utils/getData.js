const API = 'https://rickandmortyapi.com/api/character' //jaja

const getData = async (id) => {

    const apiURL = id ? `${API}/${id}` : API
    try {

        const request = await fetch(apiURL)
        const response = await request.json()
        return response

    } catch(error){

        console.error(error.message)
    }

}

export default getData;
