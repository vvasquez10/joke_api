const express = require ('express');
const JokeRouter = express.Router();

const ControladorJoke = require('./../controladores/controladorJoke');


JokeRouter.post('/nuevo', ControladorJoke.insertarJoke);
JokeRouter.get('/random', ControladorJoke.randomJoke);
JokeRouter.get('/', ControladorJoke.obtenerJokes);
JokeRouter.get('/:_id', ControladorJoke.obtenerJoke);
JokeRouter.delete('/delete/:_id', ControladorJoke.deleteJoke);
JokeRouter.put('/update/:_id', ControladorJoke.updateJoke);



module.exports = JokeRouter;