const express = require('express');		//CommonJS(require) vs ModuleJS(import)
const postsRouter = require('./routers/posts.js'); //recupera file di routing 

const app = express();					//creo server		
const port = 3000;						//ingresso su dove il server riceve richieste

app.use(express.json());                 //parsejson 
app.use(express.static('public'));		//rendo disponibile al serve i file dentro cartella public
app.use("/posts", postsRouter);          //contiene tutte le richieste fatte all'indirizzo /posts


app.get('/', (req, res) => {			//richiesta su rotta principale
	res.send('<html><body><h1>Server del mio blog</h1></body></html>')
})

app.listen(port, () => {				//avvio del server che si mette in ascolto di richieste sulla porta indicata
     console.log(`Server avviato su http://localhost:${port}`);
})




