const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');

router.get('/view',async(req,res) => {
   try{
     const users = await User.find();
     res.json(users)
   } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
   }
})

router.post('/create',async (req,res) => {
    const { name,email,roles } = req.body;
    try{
        const user  = await User.findOne({email});
        if(user){
            return res.status(400).send("User already exists");
        }
        user = new User({
            name,
            email,
            roles
        })

        await user.save();
        res.json(user);
    }catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
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
    try {
        if(username === 'admin'){
         const salt = await bcrypt.genSalt(10);
         const adminPassword = await bcrypt.hash('admin',salt); 
         const isMatch = await bcrypt.compare(password,adminPassword);
         if(!isMatch){
             return res.json(400).message('Invalid Credentials');
         } else {
             const admin = {
                 username: username,
                 password: password
             }
             res.json(admin);
         }
        } else {
            return res.json(400).message('Invalid Credentials');
        } 

    }catch(err){
        console.error(error);
        res.status(500).message('Server Error')
    }
    
})

module.exports = router;