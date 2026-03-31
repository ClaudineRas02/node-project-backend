import { getBilanService } from '../services/bilanService.js';

export async function getBilanController(req, res, next) {
    try {
        const data = await getBilanService();
        res.json({
            ok: true,
            data
        });
    } catch (error) {
        next(error);
    }
}