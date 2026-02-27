const posts = require('../data/post_data.js');	

function checkId(req, res, next) {

//RECUPERO ID E CONTROLLO CHE SIA NUMERICO
   const id = Number(req.params.id); 
   console.log("Controllo se id è un numero")
   if (isNaN(id)){
        console.log("Errore: Id non valido");
        return res.status(400).json(
                                        {   
                                            error:"Invalid request",
                                            message:"Errore: l'id deve essere numerico"
                                        }
                                    )
    } 
    console.log("id valido: "+id);

//RECUPERO IL POST SE ESISTE
    console.log("Recupero il post");
    const post = posts.find(post=>post.id===id);
	if(!post){
        console.log("Il post "+id+" non esiste")
        return res.status(404).json(
                                        {
                                            error:"Not Found",
                                            message:"Il post "+id+" non esiste"
                                        }
                                    );
    }
    req.post = post;
    console.log("Post recuperato")
   next();
};

module.exports = checkId;