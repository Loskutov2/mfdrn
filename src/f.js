const BASE_URL='http://localhost:3000/movies'

const f={
    getAllMovies(){
        return fetch(`${BASE_URL}`)
        .then(response => response.json())
    },
    
    deleteMovieById(id){
        const options = {
            method: "DELETE"}
        return fetch(`${BASE_URL}/${id}`,options)
        .then(response => response.json())
    },
    
    postMovie(newMovie) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        }
        return fetch(`${BASE_URL}`,options)
        .then(res=>res.json)
    },
    
    deleteMovieById(id){
        const options = {
            method: "DELETE"}
        return fetch(`${BASE_URL}/${id}`,options)
        .then(response => response.json())
    }
}

module.exports=f