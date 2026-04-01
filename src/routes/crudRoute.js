import { Router } from "express";
import {
 addEnseignantController,
 deleteEnseignantController,
 getAllEnsController, updateEnseignantController
} from "../controllers/ensController.js";

const router = Router()

/**
 * definir tes routes pour get ,post ..ici (Daniella)
 */
router.get('/getEns',getAllEnsController)
router.post('/addEns',addEnseignantController)
router.delete('/delEns/:id',deleteEnseignantController)
router.put('/modEns/:id',updateEnseignantController)

export default router;