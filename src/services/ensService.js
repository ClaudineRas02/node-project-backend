import { getAllEnseignant } from "../models/ensModel.js";

export async function getAllEnseignantService() {
    return await getAllEnseignant()
}