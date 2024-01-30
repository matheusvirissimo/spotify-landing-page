const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlist")


function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`; // procura artista com nome parecido
    fetch(url)
    .then((response) => response.json()) // pega a resposta e converte em JSON
    .then((result) => displayResults(result))
}
document.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    if(searchTerm === ''){
        resultPlaylist.classList.add("hidden");
        return;
    }
    
    requestApi(searchTerm);
})

function displayResults(result){
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtists.classList.remove("hidden");
}