const express = require('express');
const router = express.Router();
const User = require('../models/contacts');

router.get('/view',async(req,res) => {
   try{
     const users = await User.find();
     res.json(users)
   } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
   }
})

router.post('/create',(req,res) => {
    console.log('view')
})

router.put('/update',(req,res) => {
    console.log('view')
})

router.delete('/delete',(req,res) => {
    console.log('view')
})

router.put('/update/roles',(req,res) => {
    console.log('view')
})

router.get('/login',async(req,res) => {
    const {username,password} = req.body;
    
})

module.exports = router;