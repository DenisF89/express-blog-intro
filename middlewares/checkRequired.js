//ESEMPIO CON TUTTI I PARAMETRI OBBLIGATORI DA PASSARE O ERRORE

function checkRequired(req,res,next){

    const required = ["title", "content", "image", "tags"];             //parametri obbligatori
    const missing = required.filter(r => req.body[r] === undefined);    //se nella richiesta non è presente il parametro obbligatorio scrivilo in "missing"

    if (missing.length)                                                 //se ci sono parametri mancanti
        { return res.status(400).json(                                  //torna errore json
                { error: "Bad Request", 
                message: "Parametri obbligatori mancanti", 
                missing}                                                //parametri mancanti
        );} 

    next();
}

module.exports = checkRequired;