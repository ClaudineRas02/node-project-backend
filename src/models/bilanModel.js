import { pool } from '../config/db.js';

export async function getBilan() {
    const sql = `
        SELECT 
            MIN(nbheures * tauxhoraire) AS salaire_min,
            MAX(nbheures * tauxhoraire) AS salaire_max,
            SUM(nbheures * tauxhoraire) AS salaire_total
        FROM Enseignant
    `;
    const { rows } = await pool.query(sql);
    return rows[0];
}