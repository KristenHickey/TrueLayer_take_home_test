import { Router } from 'express';
import { getPokemon } from './controllers.js';

const router = Router()


router.get('/pokemon/:name', getPokemon)


export default router;
