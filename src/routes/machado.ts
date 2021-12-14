import { Router } from 'express';
import { AxeGet } from '../endpoint/axeGet';

const router = Router();

/**
 * GET /axeGet
 * @tag Machado
 * @response 204
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get('/axeGet', AxeGet);

export default router;
