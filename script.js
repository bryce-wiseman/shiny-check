//this is a test


const shinyDiv = document.getElementById('shiny-div')
let shinyImg = document.getElementById('shiny-img')
let shinyP = document.getElementById('shiny-statement')

const giphyKey = 'ihty4abPppTTdOBSp0Gq8yRXF6GZKrOj'
const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&limit=1&rating=g&q=`

const pokeList = './pokemon.txt'

async function pickAPokemon() {
    let list = await fetch(pokeList)
    let textList = await list.text()
    let listToArray = await textList.split('\n')
    let chosenNum = await Math.floor(Math.random() * listToArray.length)
    let chosenMon = await listToArray[chosenNum]
    console.log(chosenMon)
    return chosenMon
}

async function makeURL(pokemon) {
    let formatToAPI = await giphyAPI.concat(pokemon)
    let searchAPI = await fetch(formatToAPI)
    let searchedTerm = await searchAPI.json()
    let endURL = searchedTerm.data[0].images['fixed_height'].url
    
    console.log(endURL)

    return endURL
}

async function btnFunc() {
    let chosenMon = await pickAPokemon()
    let url = await makeURL(chosenMon)
    
    shinyDiv.classList.remove('hidden')
    shinyImg.src = url
    shinyP.innerHTML = `Congrats! You caught a shiny ${chosenMon}!`
    shinyDiv.classList.remove('hidden')
}
