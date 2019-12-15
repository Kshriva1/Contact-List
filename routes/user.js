const express = require('express');
const router = express.Router();
const Correction = require('../models/new');
const bcrypt = require('bcryptjs');
const AdminVerUser = require('../models/adminVerUser');


router.post('/view',async(req,res) => {
    const { user } = req.body;
    try{
        const contacts = await Correction.find({user});
        res.json(contacts)
      } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})

router.post('/create',async (req,res) => {
    const { name,phone,user } = req.body;
    try{
        console.log(name,phone,user)
        console.log("here");
        let contact = await Correction.findOne({phone,user});
        if(contact){
            return res.status(400).send("Contact already exists");
        } else{
            console.log("now error")
           contact = new Correction({
               name,
               phone,
               user
           }) 

           console.log(contact)
           await contact.save();
           res.json(contact);
        }
    }catch(err){
        console.error(err);
        res.status(500).send("Server Error")
    }
})

router.put('/update/:id',async (req,res) => {
    const { name,phone } = req.body;
    try{
        const contact = await Correction.findOne({_id:req.params.id});
        if(!contact){
            return res.status(400).send("Contact does not exists");
        }
        contact.name = name;
        contact.phone = phone;
        await contact.save()
        res.json(contact);
    } catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
})

router.delete('/delete/:id',async (req,res) => {
    try{
        const contact = await Correction.findOneAndDelete({_id:req.params.id})
        if(!contact){
            return res.status(400).send('Could not delete contact information');
        }
        await contact.save();
        res.json(contact)
    }catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
})

router.get('/getUsers',async(req,res) => {
    try{
        const users = await AdminVerUser.find();
        res.json(users)
      } catch(err){
       console.error(err.message);
       res.status(500).send('Server Error');
      }
})

router.post('/login',async (req,res) => {
    const { email,password } = req.body;
    try{
        const user = await AdminVerUser.findOne({email});
        if(!user){
            return res.status(400).send('Invalid Credentials');
        }
        
        const isMatch = await bcrypt.compare(password,user.password);
    
        if(!isMatch){
            return res.status(400).send('Invalid Match');
        }
            res.json(user);
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
        res.json(user);

    } catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
})

module.exports = router;