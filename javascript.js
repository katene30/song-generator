
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function formatString(string) {
    const result = string.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

    return finalResult
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

function lookUpGenreByGenreName(genreName){

    let genre = genres.find(genre => genre.name.replace(/\s/g,'') == genreName.replace(/\s/g,''))
    return genre
}

function setSubGenre(genre, subgenre){

    if(genre.subgenre && document.getElementById("subgenreCheck").checked){
        document.getElementById("subgenre").innerHTML = subgenre
        document.getElementById("subgenre").style.visibility == "visible"
    }
    else{
        document.getElementById("subgenre").style.visibility == "hidden"
    }
}

function toggleSubgenre(){
    let genre = lookUpGenreByGenreName(document.getElementById("genre").textContent)
    if(genre.subgenre && document.getElementById("subgenreCheck").checked){
        document.getElementById("subgenre").style.visibility = "visible"

    }else{
        document.getElementById("subgenre").style.visibility = "hidden"
    }
}

function getRandomTempo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function getRandomKey(){
    let key = notes[getRandomInt(notes.length)] + " " + majorOrMinor[getRandomInt(majorOrMinor.length)]

    return key
}



function newSong(){
    // Get Genre
    const genre = getGenre()
    document.getElementById("genre").innerHTML = formatString(genre.name)
    
    // Get Subgenre
    if(genre.subgenre && document.getElementById("subgenreCheck").checked){
        const subgenre = getSubgenre(genre)
        document.getElementById("subgenre").style.visibility = "visible"
        setSubGenre(genre, subgenre)
    }else{
        document.getElementById("subgenre").style.visibility = "hidden"
    }

    // Get Tempo
    document.getElementById("tempo").innerHTML = getRandomTempo(60,200) + " bpm"
    
    // Get Key
    document.getElementById("key").innerHTML = getRandomKey()


    
}