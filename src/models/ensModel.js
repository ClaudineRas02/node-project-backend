import { pool } from "../config/db.js";

export async function getAllEnseignant() {
    const sql = "SELECT * FROM Enseignant"
    const { rows } = await pool.query(sql)
    return rows[0]
}