const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');
const AdminVerUser = require('../models/adminVerUser');

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
        
        let user  = await User.findOne({email});
        if(user){
            return res.status(400).send("User already exists");
        }
        user = new User({
            name:name,
            email:email,
            roles:roles
        })
        

        await user.save();
        res.json(user);
    }catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
})

router.put('/update/:id',async (req,res) => {
    const { name,email,roles } = req.body;
    
    try {
        const user  = await User.findOne({_id:req.params.id});
        if(!user){
            return res.status(400).send("User does not exists");
        } else{
            user.name = name;
            user.email = email;
            user.roles = roles;
        await user.save();
        res.json(user);
        }
    } catch(err){
        console.error(err);
        res.status(500).send('Server Error')
    }
})

router.delete('/delete/:id',async (req,res) => {
    try{
    const user = await User.findOneAndDelete({_id:req.params.id});
    if(!user){
        return res.status(500).send("cannot delete")
    } else{
        await AdminVerUser.findOneAndDelete({email:user.email});
        res.json(user)
    }
} catch(err){
    console.error(err);
    res.status(500).send("Server Error");
}
    // User.findOneAndDelete({_id:req.params.id}, function(err,result){
    //     if(err){
    //         res.status(500).send("Server Error")
    //     } else if(result) {
    //         res.json(result)
    //     }
    // })
})

router.post('/login',async(req,res) => {
    const {username,password} = req.body;
    try {
        if(username === 'admin'){
        
         if(!(password==="admin")){
             return res.status(400).send('Invalid Credentials');
         } else {
             const admin = {
                 username: username,
                 password: password
             }
             res.json(admin);
         }
        } else {
            return res.status(400).send('Invalid Credentials');
        } 

    }catch(err){
        console.error(err);
        res.status(500).send('Server Error')
    }
    
})

module.exports = router;