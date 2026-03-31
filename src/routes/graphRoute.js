import { Router } from "express";
import { getBilanController } from "../controllers/bilanController.js";

const router = Router()

/**
 * Route pour le bilan (salaire min, max, total)
 */
router.get('/bilan', getBilanController);

export default router;