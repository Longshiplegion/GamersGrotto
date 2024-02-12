import { Router } from 'express';
import * as GamesController from './games.controller';

const router = Router();

router
    .route('/games')
    .get(GamesController.getAllGames);
router
    .route('/games')
    .post(GamesController.addGame);


router
    .route('/games/:id')
    .get(GamesController.getGameById);
router
    .route('/games/:id')
    .put(GamesController.updateGame);
router
    .route('/games/:id')
    .delete(GamesController.deleteGame);

export default router;
