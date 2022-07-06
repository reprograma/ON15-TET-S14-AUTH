const express = require('express')
const router =express.Router();
const controllerUser = require('../controllers/userController')
const auth = require('../middlewares/auth')
const controllerPost = require('../controllers/postController')


router.post('/createLogin',controllerUser.createUser)
router.post('/login',controllerUser.login)
router.post('/createPost',auth.checkAuth,controllerPost.createPost)
router.get('/myposts',auth.checkAuth,controllerPost.getPostUser)
router.get('/feed',auth.checkAuth,controllerPost.getAllPost)
router.put('/changePost/:id',auth.checkAuth,controllerPost.updatePost)
router.delete('/deletePost/:id',auth.checkAuth,controllerPost.deletePost)



module.exports = router