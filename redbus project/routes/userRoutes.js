
const express = require('express');
const router  = express.Router();

const userController = require ('../controllers/userController')


router.post('/register', userController.RegisterUser);
router.post('/login', userController.LoginUesr);
router.post('/reset-password-otp',userController.resetpassworsOtp);
router.post('/resetPassword', userController.VeriyOtp);

router.get('/UserProfile/:id', userController.SigleUser);
router.get('/allUser', userController.GetAllUsers);

router.put('/update-profile/:id', userController.UserUpdate);

router.delete('/Delete-User-profile/:id', userController.UserDelete);
router.delete('/allUserDelete', userController.AllUserDataDelete);


module.exports = router; 