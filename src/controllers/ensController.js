import {
    addEnseignantService,
    deleteEnseignantService,
    getAllEnseignantService,
    updateEnseignantService
} from "../services/ensService.js";

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

export async function addEnseignantController(req, res, next) {
    try{
        const enseignant = req.body
        const result = await addEnseignantService(enseignant);
        if(!result) return res.status(404).json({ok:false, message:"Ajout non reussi"})

        res.json({
            ok:true,
            message:"Ajout de nouveau enseignant effectué",
            data: result
        })
    }
    catch(error){
        next(error)
    }
}

export async function deleteEnseignantController(req,res,next) {
    try{
        const id =  req.params.id;
        const result = await deleteEnseignantService(id);
        if(!result) return res.status(404).json({ok:false, message:'Enseignant non trouvé'});
        res.json({ok:true,message:"Suppression effectué"});

    }
    catch(error){
        next(error)
    }
}

export async function updateEnseignantController(req,res,next) {
    try {
        const id = req.params.id;
        const enseignant = req.body;
        const result = await updateEnseignantService(enseignant, id);
        if(!result) return res.status(404).json({ok:false, message: 'Enseignant non trouvé'});
        res.json({ok:true,message:"Modification réussi", data: result});
    }
    catch(error){
        next(error)
    }
}