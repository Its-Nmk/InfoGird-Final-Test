/*=====================Header Section===================== */
//-----Requiring express files
const express = require('express');
const router = express.Router();


const path = require('path');

const { validator } = require('../validator/inputValidate');

//-----Requiring all the controller files
const control = require('../controller/controller')


/*============================ADMIN Login Section ============================ */

// signup Page
router.post('/signup', control.addUser)

// update data
router.patch('/profile/edit/:id', control.updateUser)

//-----login page 
router.post('/login', control.checkLogin);

// ---profile
router.get('/profile/:id', control.profile);

// ---logout control
router.get('/logout', control.logout);






/*============================CRUD API SECTION============================ */








/*=====================Footer Section===================== */

module.exports = router;
