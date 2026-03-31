import { getBilan } from '../models/bilanModel.js';

export async function getBilanService() {
    return await getBilan();
}