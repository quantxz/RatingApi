import express from 'express';
import cors from 'cors'
import routes from './routes';
import "dotenv"

class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.server.use(express.json())
        this.server.use(cors())
    }

    private routes() {
        this.server.use(routes)
    }
}

export default new App().server;