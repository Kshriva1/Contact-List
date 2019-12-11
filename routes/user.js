const express = require('express');
const router = express.Router();
const Contacts = require('../models/contacts');
const bcrypt = require('bcrypt-nodejs');
const AdminVerUser = require('../models/adminVerUser');


router.get('/view',async(req,res) => {
    try{
        const contacts = await Contacts.find();
        res.json(contacts)
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

router.get('/login',async (req,res) => {
    const { email,password } = req.body;
    try{
        const user = await AdminVerUser.findOne({email});
        if(!user){
            return res.status(400).send('Invalid Credentials');
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).send('Invalid Credentials');
        } else{
            res.json(user);
        }
    }catch(err){
        console.error(err);
        res.status(500).send('Server error');
    }
})

router.post('/register',async(req,res) => {
    const { name,email,password } = req.body;
    try{
        let user = await AdminVerUser.findOne({email});
        if(user){
            return json.status(400).send("user already exists");
        } 

        user = new AdminVerUser({
            name,
            email,
            password
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();

    } catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
})

module.exports = router;