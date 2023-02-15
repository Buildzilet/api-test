const express = require('express');
const router = express.Router()

//controller
const { 
    listUsers,
    readUsers,
    updateUsers,
    removeUsers,
    changeStatus,
    changeRole
} = require('../controllers/users')

    //middleware
const { auth,adminCheck } = require('../middleware/auth')

//@Endpoints http://localhost:5000/api/users
//@methods GET
//@Access  Private
router.get('/users',auth, adminCheck ,listUsers);

//@Endpoints http://localhost:5000/api/users/:id
//@methods GET
//@Access  Private
router.get('/users/:id',readUsers);

//@Endpoints http://localhost:5000/api/users/:id
//@methods PUT
//@Access  Private
router.put('/users/:id',updateUsers);

//@Endpoints http://localhost:5000/api/users/:id
//@methods DELETE
//@Access  Private
router.delete('/users/:id',removeUsers);

//@Endpoints http://localhost:5000/api/change-status
//@methods POST
//@Access  Private
router.post('/change-status',auth,adminCheck,changeStatus);

//@Endpoints http://localhost:5000/api/change-role
//@methods POST
//@Access  Private
router.post('/change-role',auth,adminCheck,changeRole);



module.exports = router