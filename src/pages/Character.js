import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {

    const id = getHash()
    const request = await getData(id)
    const view = `

    <br>
    <div class="character-inner">

        <article class="character-card">
            <img src="${request.image}" alt="name">
            <h2>${request.name}</h2>
        </article>

        <article class="character-card">
            <h3>Episodes: ${request.episode.length}</h3>
            <h3>Status: ${request.status}</h3>
            <h3>Species: ${request.species}</h3>
            <h3>Gender: ${request.gender}</h3>
            <h3>Origin: ${request.origin.name}</h3>
            <h3>Last location: ${request.location.name}</h3>
        </article>

    </div>

    `

    return view
}

export default Character;