import { Router } from "express";
import crudRoute from "./crudRoute.js"
import graphRoute from "./graphRoute.js"

const router = Router()

router.use("/crud", crudRoute);
router.use("/graph",graphRoute);

export default router;