const axios = require("axios")
const cors = require("cors")
const express = require("express")
const app = express()

const PORT = 3000

app.use(cors())

app.get(`/characters`, async (req, res) => {
    const url = `https://rickandmortyapi.com/api/character`
    try {
        const response = await axios.get(url)
        const characters = response.data.results.map(({ id, name, status, species, gender, origin, image }) => ({
            id,
            name,
            status,
            species,
            gender,
            origin: origin.name,
        }))

        res.json(characters)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los personajes" })
    }
})

app.get(`/character/:idCharacter`, async (req, res) => {
    const idCharacter = req.params.idCharacter
    const url = `https://rickandmortyapi.com/api/character/${idCharacter}`
    try {

        const response = await axios.get(url)
        const { name, status, species, gender, origin, image  } = response.data

        res.json({ name, status, species, gender, origin: origin.name, image })
    } catch (error) {
        res.status(404).json({error: "Character no encontrado"})
    }
})


app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`);
    
})