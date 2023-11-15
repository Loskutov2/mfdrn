const newMovie={
    "title": "Css",
    "director": "Me",
    "genres": ["Action"],
    "rating": 10
}

const BASE_URL = 'http://localhost:3000';
async function getMovies(){
    try {
        const movie = await fetch(`${BASE_URL}/movies`)
        const movies = movie.json()
        return movies
    } catch (err) {
        console.log(err)
    }
}
async function getMoviesById(id){
    return fetch(`${BASE_URL}/movies/${id}`)
    .then(r=>r.json())
}
async function createMovie() {
    const options={
        method: 'POST',
        headers:{'Content-type':"application/json"},
        body:JSON.stringify(newMovie)
}
try {
    const movie = await fetch(`${BASE_URL}/movies`, options)
    const addMovie = await movie.json()
    return addMovie
} catch (err) {
    console.log(err)
}
}

async function updeateMovie(id, update){
    const options={
        method:'PATCH',
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(update) 
    }
    try{
    const movie = await fetch(`${BASE_URL}/movies/${id}`,options)
    const parceMovie = await movie.json()
    return parceMovie
    }catch(err){
        console.log(err)
    }
}

async function deleteMovie(id){
    const options={method:'DELETE'}
    try {
    const movie = await fetch(`${BASE_URL}/movies/${id}`,options)
    const deleteMovie= await movie.json()
    return deleteMovie
    }catch (err) {
        console.log(err)
    }
}

