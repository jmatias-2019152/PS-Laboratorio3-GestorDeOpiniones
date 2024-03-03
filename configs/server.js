import express from 'express';
import cors from 'cors'
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './mongo.js';
<<<<<<< HEAD
import usuarioRoutes from '../src/usuario/usuario.routes.js'
=======
import usuarioRoutes from '../src/usuario/usuario.routes.js';
import publicacionRoutes from '../src/publicacion/publicacion.routes.js';
import { runInThisContext } from 'vm';
>>>>>>> ft/publicacion

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/gestorOpiniones/v1/usuario';
<<<<<<< HEAD
=======
        this.publicacionPath = '/gestorOpiniones/v1/publicacion'
>>>>>>> ft/publicacion
        this.conectarDB(); 
        this.middlewares();
        this.routes();
        global.sesion = "";
    };

    async conectarDB() {
        await dbConnection();
    };

    
    middlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    };

   
    routes() {
        this.app.use(this.usuarioPath, usuarioRoutes);
<<<<<<< HEAD
=======
        this.app.use(this.publicacionPath, publicacionRoutes);
>>>>>>> ft/publicacion
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    };
};

export default Server;