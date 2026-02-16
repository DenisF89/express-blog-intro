const express = require('express');
const posts = require('./personaggi.js');

const app = express();
const port = 3000;


app.get('/post', (req, res) => {


	// res.send(persona); //invio JSON e lascio che express "intuisca" il type
	// res.type("json").send(persona) //esplicito il type a mano
	// res.type("json").send(persona);
	res.json(posts); //esplicito il type in forma concisa

})


app.use(express.static('public'));

app.get('/', (req, res) => {
	console.log("Chiamata ricevuta!");
	res.send('<html><body><h1>Server del mio blog</h1></body></html>')
})

app.listen(port, () => {
     console.log(`Server in ascolto su http://localhost:${port}`);
})