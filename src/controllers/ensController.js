import { getAllEnseignantService } from "../services/ensService.js";

export async function getAllEnsController(req,res,next) {
    try{
        const data = await getAllEnseignantService();
        res.json({
            ok:true,
            data
        })
    }catch(error){
        next(error)
    }
}