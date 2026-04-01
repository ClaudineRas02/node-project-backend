import {getAllEnseignant, addEnseignant, deleteEnseignant, updateEnseignant} from "../models/ensModel.js";

export async function getAllEnseignantService() {
    return await getAllEnseignant()
}

export async function addEnseignantService(enseignant) {
    return await addEnseignant(enseignant)
}

export async function deleteEnseignantService(id) {
    return await deleteEnseignant(id)
}

export async function updateEnseignantService(enseignant, id) {
    return await updateEnseignant(enseignant, id)
}