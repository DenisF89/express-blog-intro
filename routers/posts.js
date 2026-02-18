const express = require('express');
const posts = require('../post_data.js');	

const router = express.Router();

//Index (cRud)  --> localhost:3000/posts
router.get('/', (req, res) => {
	res.json(posts);
})

//Show (cRud)	--> localhost:3000/posts/1
router.get('/:id', (req, res) => {
	res.send(`You requested to SHOW the post with id: ${req.params.id}`);
})

//Store (Crud)  -->localhost:3000/posts
router.post('/', (req, res) => {
	res.send(`You requested to CREATE a new post`);
})

//Update (crUd)	-->localhost:3000/posts/1
router.put('/:id', (req, res) => {
	res.send(`You requested to UPDATE (full overwrite) the post with id: ${req.params.id}`);
})

//Modify (crUd) -->localhost:3000/posts/1
router.patch('/:id', (req, res) => {
	res.send(`You requested to MODIFY (partial) the post with id: ${req.params.id}`);
})

//Destroy (cruD) -->localhost:3000/posts/1
router.delete('/:id', (req, res) => {
	res.send(`You requested to DELETE the post with id: ${req.params.id}`);
})


module.exports = router;