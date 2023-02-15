const express = require('express');
const router = express.Router()

const {
    register,
    login,
    listUser,
    editUser,
    deleteUser,
    currentUser
} = require('../controllers/auth')

    //middleware
const { auth,adminCheck } = require('../middleware/auth')


//@Endpoints http://localhost:3000/api/register
//@methods POST
//@Access  Publish
router.post('/register',register)


//@Endpoints http://localhost:3000/api/login
//@methods POST
//@Access  Publish
router.post('/login',login)



//@Endpoints http://localhost:3000/api/current-user
//@methods POST
//@Access  Private
router.post('/current-user',auth,currentUser)

//@Endpoints http://localhost:3000/api/current-admin
//@methods POST
//@Access  Private
router.post('/current-admin',auth,adminCheck,currentUser)








//@Endpoints http://localhost:3000/api/auth
//@methods GET
//@Access  Publish
router.get('/auth',listUser)





//@Endpoints http://localhost:3000/api/auth
//@methods put
//@Access  Publish
router.put('/auth',editUser)

//@Endpoints http://localhost:3000/api/auth
//@methods delete
//@Access  Publish
router.delete('/auth',deleteUser)
module.exports = router