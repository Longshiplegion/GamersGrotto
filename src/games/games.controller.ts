import { Request, Response, RequestHandler } from 'express';
import { Game } from './games.model';
import * as GameDao from './games.dao';
import { OkPacket } from 'mysql';

export const getAllGames: RequestHandler = async (req: Request, res: Response) => {
  try {
    const games = await GameDao.getAllGames();
    res.status(200).json(games);
  } catch (error) {
    console.error('[games.controller][getAllGames][Error]', error);
    res.status(500).json({
      message: "There was an error when fetching games",
    });
  }
};

export const getGameById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const gameId = parseInt(req.params.id);
    const game = await GameDao.getGameById(gameId);
    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ message: 'Game not found' });
    }
  } catch (error) {
    console.error('[games.controller][getGameById][Error]', error);
    res.status(500).json({
      message: "There was an error when fetching game by ID",
    });
  }
};

export const addGame: RequestHandler = async (req: Request, res: Response) => {
  try {
    
    const okPacket: OkPacket = await GameDao.addGame(req.body);
    res.status(200).json(okPacket);
  } catch (error) {
    console.error('[games.controller][addGame][Error]', error);
    res.status(500).json({
      message: "There was an error when creating game",
    });
  }
};

export const updateGame: RequestHandler = async (req: Request, res: Response) => {
  try {
    const gameId = parseInt(req.params.id);
    const Game = req.body
    const okPacket: OkPacket = await GameDao.updateGame(Game,gameId);
    res.status(200).json(okPacket);
  } catch (error) {
    console.error('[games.controller][updateGame][Error]', error);
    res.status(500).json({
      message: "There was an error when updating game",
    });
  }
};



export const deleteGame: RequestHandler = async (req: Request, res: Response) => {
  try {
    const gameId = parseInt(req.params.id);
    const response: OkPacket = await GameDao.deleteGame(gameId);
    res.status(200).json(response);
  } catch (error) {
    console.error('[games.controller][deleteGame][Error]', error);
    res.status(500).json({
      message: "There was an error when deleting game",
    });
  }
};
