import http from 'http'
import app from './api/api.js'
import database from './api/config/database.js'
const port = process.env.PORT || 3000
const server = http.createServer(app)

const onListening=()=>console.log(`Servidor escuchando ✅ en ${port}`);
const onError=()=>{
    switch (error.code) {
        case 'EACCES':
          console.error('El sistema no tiene permisos suficientes 🔴');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error('El puerto con esa dirección ya están siendo usados 😢');
          process.exit(1);
          break;
        default:
          throw error;
      }
}

server.on("listening",onListening)
server.on("error",onError)

server.listen(port)
database()