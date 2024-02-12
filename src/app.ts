import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as gameController from './games/games.controller';
import dotenv from "dotenv"
import gameRoutes from './games/games.routes';

dotenv.config();

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome To The games api <h1/>')
})

app.use('/', [gameRoutes]);




app.listen(port, () => {

	console.log(`Example app listening at http://localhost:${port}`)
	console.log(process.env.GREETING);

});