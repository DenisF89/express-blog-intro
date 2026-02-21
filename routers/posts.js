const express = require('express');
const postsController = require('../controllers/posts_controller')

const router = express.Router();

//Index (cRud)  --> localhost:3000/posts
router.get('/', postsController.index )

//Show (cRud)	--> localhost:3000/posts/1
router.get('/:id', postsController.show );

//Store (Crud)  -->localhost:3000/posts
router.post('/', postsController.store );

//Update (crUd)	-->localhost:3000/posts/1
router.put('/:id', postsController.update );

//Modify (crUd) -->localhost:3000/posts/1
router.patch('/:id', postsController.modify );

//Destroy (cruD) -->localhost:3000/posts/1
router.delete('/:id', postsController.destroy );

module.exports = router;