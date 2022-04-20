const mongoose = require ('mongoose');

const SchemaJoke =  new mongoose.Schema({
    setup : {
        type : String,
        required : true,
        minlength : [10, "El setup debe tener 10 caracteres como minimo."]
    },
    punchline : {
        type : String,
        required : true,
        minlength : [3, "El punchline debe tener 3 caracteres como minimo."]
    }
});

const Joke = mongoose.model('jokes', SchemaJoke);

module.exports = Joke;