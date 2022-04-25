import getData from "../utils/getData";

const Home = async () => {

    const characters = await getData()
    const view = `
        <br>
        <div class="characters">
            ${characters.results.map(character => {

                return `
                <article class="character-item">
                    <a href="#/${character.id}/" class="">
                        <img src="${character.image}" alt="${character.name}" title="${character.name} image"/>
                        <h2>${character.name}</h2>
                    </a>
                </article>
                `
            }).join(' ')}
               
        </div>
    `

    return view
};

export default Home;

