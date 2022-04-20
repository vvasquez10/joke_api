const Joke = require('./../modelos/modeloJoke');

const insertarJoke = (request, response) => {

    const {setup, punchline} = request.body;

    if (!setup || !punchline){
        response.statusMessage = "Es necesario llenar todos los campos.";
        return response.status(406).end();
    }
    else {
        const nuevoJoke = {setup, punchline};

        Joke.create(nuevoJoke)
            .then (nuevoDato => {
                return response.status(201).json(nuevoDato);
            }) 
            .catch(err => {
                response.statusMessage ="Hubo un error al crear el elemento. " + err;
                return response.status(400).end();
            });
    }

}

const obtenerJokes = ( request, response ) => {
    Joke.find()
        .then( listaJokes => {
            return response.status( 200 ).json( listaJokes );
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el find. " + err;
            return response.status( 400 ).end();
        });
}

const obtenerJoke = (request, response) => {
    const {_id} = request.params;

    Joke.findById(_id)
        .then(jokeEncontrado => {
            return response.status(200).json(jokeEncontrado);
        })
        .catch(err => {
            response.statusMessage = "Hubo un error al obtener el elemento. " + err;
            return response.status( 400 ).end();
        });
}

const deleteJoke = ( request, response ) => {
    const {_id} = request.params;

    Joke.deleteOne( { _id } )
        .then( () => {
            return response.status( 204 ).end(); 
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el delete. " + err;
            return response.status( 400 ).end();
        });
}

const updateJoke = ( request, response ) => {
    const { _id } = request.params;
    const { setup, punchline } = request.body;
    const jokeActualizado = {
        setup, punchline
    };
    console.log( jokeActualizado );

    Joke.findOneAndUpdate( {_id}, { $set : jokeActualizado}, {new : true} )
        .then( (datoJoke) => {
            return response.status( 202 ).json( datoJoke );
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el update. " + err;
            return response.status( 400 ).end();
        });
}

const randomJoke = (request, response) => {   
   
   // Get the count of all users
    Joke.count(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count);
  
    // Again query all users but only fetch one offset by our random #
    Joke.findOne().skip(random).exec(
      function (err, result) {
        // Tada! random user        
        return response.status(200).json(result);
      })
  })
    
}

const ControladorJoke = {
    insertarJoke,
    obtenerJokes,
    obtenerJoke,
    deleteJoke,
    updateJoke,
    randomJoke
};

module.exports = ControladorJoke;