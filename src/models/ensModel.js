import { pool } from "../config/db.js";

export async function getAllEnseignant() {
    const sql = "SELECT * FROM Enseignant"
    const { rows } = await pool.query(sql)
    return rows[0]
}

export async function addEnseignant(enseignant) {
    try {
        const sql = "INSERT INTO Enseignant(nom, nbHeures, tauxHoraire) VALUES ($1, $2, $3) RETURNING *";
        const res = await pool.query(sql, [enseignant.nom, enseignant.nbHeures, enseignant.tauxHoraire]);
        return res.rows[0]
    }
    catch (error) {
        console.error("Erreur dans addEnseignant: ", error)
        throw error;
    }


}

export async function deleteEnseignant(id) {
    try{
        const sql = 'DELETE FROM Enseignant WHERE idEnseignant = $1';
        const res = await pool.query(sql, [id]);
        return res.rowCount
    }
    catch (error) {
        console.error("Erreur dans deleteEnseignant: ", error)
        throw error;
    }
}

export async function updateEnseignant(enseignant, id) {
    try{
        const sql = 'UPDATE Enseignant SET nom = $1, nbHeures = $2, tauxHoraire = $3 WHERE idEnseignant = $4 RETURNING *';
        const res = await pool.query(sql, [enseignant.nom, enseignant.nbHeures, enseignant.tauxHoraire, id]);
        return res.rows[0]
    }
    catch (error) {
        console.error("Erreur dans updateEnseignant: ", error)
        throw error;
    }

}