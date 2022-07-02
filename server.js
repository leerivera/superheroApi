const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.static('public'))
const PORT = 8000

app.use(cors())


const superheros = {
    'spiderman': {
        'birthName': 'Peter Parker',
        'powers': 'super strenght, spidey-sense, wall-crawling'

    },
    'the punisher':{
        'birthName': 'Frank Castle',
        'powers': 'none, skilled combatant'
    }

}


app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:superheroName', (request, response) => {
     const superheroName = request.params.superheroName.toLocaleLowerCase()
     if(superheros[superheroName]){
        response.json(superheros[superheroName])
     }else{
        response.json("not a hero")
     }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`the server is running on ${PORT}! damn that's fast`)
})