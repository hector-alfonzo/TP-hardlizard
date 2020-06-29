const fs = require('fs');
let masVotadas = {
    bd: './data/movies.json',
    titulo: "Mas Votadas.",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        let movies = this.leerJSON();
        let masVotadas = movies.movies.filter(function(movie){
            return movie.vote_average >= 7;
        })
        return masVotadas.length

    },
    listarPelis: function() {
        let movies = this.leerJSON();
        let masVotadas = movies.movies.filter(function(movie){
            return movie.vote_average >= 7
        })
        return masVotadas
    },
    ratingPromedio: function(){
        let movies = this.listarPelis(); 
        let sumaRating=0;
        movies.forEach(function(movie){
            sumaRating += movie.vote_average
        })
        return Math.round(sumaRating / movies.length)
    }
}
module.exports = masVotadas 