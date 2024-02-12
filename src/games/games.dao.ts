import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Game } from './games.model';
import { gameQueries } from './games.queries';

export const getAllGames = async () => {
    return execute<Game[]>(gameQueries.getGames, []);
};

export const getGameById = async (gameId: number) => {
    return execute<Game[]>(gameQueries.getGameById, [gameId]);
};

export const addGame = async (game: Game) => {
    return execute<OkPacket>(gameQueries.createGame, [game.name, game.release_date, game.developer, game.publisher]);
};

export const updateGame = async (game: Game,gameId:number) => {
    return execute<OkPacket>(gameQueries.updateGame, [game.name, game.release_date, game.developer, game.publisher, gameId]);
};

export const deleteGame = async (gameId: number) => {
    return execute<OkPacket>(gameQueries.deleteGame, [gameId]);
};
