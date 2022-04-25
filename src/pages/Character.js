const Character = () => {

    const view = `

    <br>
    <div class="character-inner">

        <article class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="name">
        </article>

        <article class="character-card">
            <h3>Episodes:</h3>
            <h3>Status:</h3>
            <h3>Species:</h3>
            <h3>Gender:</h3>
            <h3>Origin:</h3>
            <h3>Last location:</h3>
        </article>

    </div>

    `

    return view
}

export default Character;