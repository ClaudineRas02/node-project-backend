import { Router } from "express";
import { getAllEnsController } from "../controllers/ensController.js";

const router = Router()

/**
 * definir tes routes pour get ,post ..ici (Daniella)
 */
 router.get('/getEns',getAllEnsController)

export default router;