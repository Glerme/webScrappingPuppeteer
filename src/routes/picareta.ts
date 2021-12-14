import { Router } from 'express';
import { PickaxeGet } from '../endpoint/pickaxeGet';

const router = Router();

/**
 * GET /pickaxeGet
 * @tag Picareta
 * @response 204
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get('/pickaxeGet', PickaxeGet);

export default router;
