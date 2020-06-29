let homePage = require('./homePage')
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales');
let contacto = require('./contactos');
let preguntasFrecuentes = require('./preguntasFrecuentes');

let index ={
    homePage: function(res){
        res.write(homePage.titulo +'\n \n');
        res.write("Total: " + homePage.cantidad() + '\n \n');
        let titulos = homePage.listarPelis();
        for (titulo of titulos) {
            res.write(titulo)
            res.write('\n')
        }
        res.write('\n')
        res.write('Recorda que podes visitar las secciones: \n \n')
        res.write('En Carteleta \n')
        res.write('Mas Votadas \n')
        res.write('Sucursales \n')
        res.write('Contacto \n')
        res.write('Preguntas Frecuentes')
        res.end()
    },
    enCartelera: function(res){
        res.write(enCartelera.titulo +'\n \n');
        res.write("Total: " + homePage.cantidad() + '\n \n');
        let movies = enCartelera.leerJSON();
        movies.movies.forEach(function(datos){
            res.write("\n")
            res.write("Titulo: " + datos.title)
            res.write("\n")
            res.write("Reseña:")
            res.write("\n")
            res.write(datos.overview)
            res.write("\n")
        })
        res.end();
    },
    masVotadas: function(res){
        res.write(masVotadas.titulo +'\n \n');
        res.write(`Total: ${masVotadas.cantidad()}\n \n`);
        res.write(`Promedio de Ratings: ${masVotadas.ratingPromedio()} \n \n`);
        let pelis = masVotadas.listarPelis();     
        pelis.forEach(function(datos){
            res.write("\n")
             res.write("Titulo: " + datos.title)
            res.write("\n")
            res.write("Rating: " + datos.vote_average)
            res.write("Reseña:")
            res.write("\n")
            res.write(datos.overview)
            res.write("\n")
        })
        res.end();
    },
    sucursales: function(res){
        res.write("\n")
        res.write(sucursales.titulo +'\n \n');
        res.write("Total: " + sucursales.cantidadSalas() + '\n \n');
        let salas = sucursales.leerJSON();           
        salas.theaters.forEach(function(datos){
        res.write("Nombre: " + datos.name)
        res.write("\n")
        res.write("Direccion: " + datos.address)
        res.write("\n")
        res.write("Descripcion:")
        res.write("\n")
        res.write(datos.description)
        res.write("\n")
})
        res.end();
    },
    contacto: function(res){
        
        res.write("\n")
        res.write(contacto.titulo + "\n \n")
        res.write(contacto.contenido + "\n \n")
        res.end();
    },
    preguntasFrecuentes: function(res){
        res.write("\n")
        res.write(preguntasFrecuentes.titulo + "\n \n")
        res.write("Total de preguntas: " + preguntasFrecuentes.cantidadPreguntas() + "\n \n")
        let preguntas = preguntasFrecuentes.leerJSON();
        preguntas.faqs.forEach(function(PyR){
            res.write("Pregunta: " + PyR.faq_title)
            res.write("\n \n")
            res.write("Respuesta: " + PyR.faq_answer)
            res.write("\n")
        })
        res.end();
    }
}
module.exports = index 