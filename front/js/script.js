function getCharacterInfo() {
    const characterInput = document.getElementById("characterId")
    const characterInfo = document.getElementById("characterInfo")

    const characterId = characterInput.value.toLowerCase()

    fetch(`http://localhost:3000/character/${characterId}`)
    .then(response => response.json())
    .then(data => {
        const { name, status, species, gender, image } = data
        characterInfo.innerHTML = `
        
            <h2>${name}</h2>
            <img src="${image}" alt="${name}"/>

            <p>${status}</p>
            <p>${species}</p>
            <p>${gender}</p>

        `
    })
    .catch(error => characterInfo.innerHTML = `<p>Imposible acceder al character</p>`)
}