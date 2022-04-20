const express = require( 'express' )
const port = 8080;
require( './config/config' );
const app = express();

const JokeRouter = require( './rutas/rutaJoke' );
//const UsuarioRouter = require( './rutas/rutaUsuario' );

// asegúrate de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
app.use( express.json() );

app.use('/api/jokes', JokeRouter);






// esto tiene que estar debajo de los otros bloques de código
app.listen( port, () => console.log(`Listening on port: ${port}`) );