const express = require('express');
const router = express.Router();

router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
const { name, email, password, confirm_password } = req.body;
const errors =[];
console.log(req.body)
if(name.lenght <= 0){
  errors.push({text: 'Plase insert your Name '})
}

if(password != confirm_password) {
 errors.push({text: 'Passwords do not match.'});
}
if(password.lenght > 4){
  errors.push({text: 'password must be at least 4 characters'})
}
if(errors.length > 0){
  res.render('users/singnup',{errors,name,email,password,confirm_password});
}else{
  res.send('ok')
}

});

  //let errors = [];
  
  //if(password != confirm_password) {
   // errors.push({text: 'Passwords do not match.'});
  






  module.exports = router;