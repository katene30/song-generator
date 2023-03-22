
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function formatString(string) {
    return string.replace(/([A-Z])/g, ' $1').trim().toUpperCase()
}

function getGenre(){
    let genreIndex = getRandomInt(genre.length)
    let genreName = genre[genreIndex].name
    let genreRaw = genre[genreName]
    return genreName
}

function getSubGenre(genre){

}

function newSong(){
    // Get Genre
    const genre = getGenre()

    document.getElementById("genre").innerHTML = formatString(genre)

    // Get Sub Genre


    
}