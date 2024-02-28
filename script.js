const shinyDiv = document.getElementById('shiny-div')
let shinyImg = document.getElementById('shiny-img')
let shinyP = document.getElementById('shiny-statement')

const giphyKey = 'ihty4abPppTTdOBSp0Gq8yRXF6GZKrOj'
const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&limit=1&rating=g&q=`
const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'


let randomNum = Math.floor((Math.random() * 1025) + 1)
console.log(randomNum)

async function getPokemon(pokeNum) {
    let getPokemonData = await pokeAPI.concat(pokeNum)
    let searchAPI = await fetch(getPokemonData)
    let pokemonData = await searchAPI.json()
    return pokemonData
}

async function btnFunc() {
    let pokeData = await getPokemon(randomNum)
    console.log(pokeData)

    let pokemonName = pokeData.name
    let index = 0;
    let firstLetter = pokemonName.charAt(index)
    let capitalize = firstLetter.toUpperCase()
    let fixedName = pokemonName.replace(firstLetter, capitalize)
    console.log(fixedName)

    let shinySprite = pokeData.sprites['front_shiny']
    console.log(shinySprite)
    
    shinyDiv.classList.remove('hidden')
    shinyImg.src = shinySprite
    shinyP.innerHTML = `Congrats! You caught a shiny ${fixedName}!`
}
