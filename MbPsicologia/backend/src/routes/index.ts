import express from "express"
import * as CRUD from "../controllers/crud.controller"

const router = express.Router()

router.post("/resultados", CRUD.createResultado)
router.get("/resultados", CRUD.getAllResultados)
router.delete("/resultados/:id", CRUD.deleteResultado)
// BONUS UPDATE ENDPOINT
router.put("/resultados/:id", CRUD.updateResultado)

export default router