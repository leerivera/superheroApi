document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const superheroName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-super-hero-api.herokuapp.com/api/${superheroName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.powers
    } catch(error){
        console.log(error)
    }
}