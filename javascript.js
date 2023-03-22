
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function formatString(string) {
    return string.replace(/([A-Z])/g, ' $1').trim().toUpperCase()
}

function getGenre(){
    let genreIndex = getRandomInt(genres.length)
    let genre = genres[genreIndex]
    return genre
}

function getSubgenre(genre){
    let subGenrreIndex = getRandomInt(genre.subgenre.length)
    let subgenre = genre.subgenre[subGenrreIndex]
    return subgenre
}

function newSong(){
    // Get Genre
    const genre = getGenre()
    document.getElementById("genre").innerHTML = formatString(genre.name)
    
    // Get Subgenre
    if(genre.subgenre){
        const subgenre = getSubgenre(genre)
        document.getElementById("subgenre").innerHTML = subgenre
    }
    else{
        document.getElementById("subgenre").innerHTML = ""
    }


    
}