const express = require('express');
const router = express.Router();
const Contacts = require('../models/contacts');


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

router.get('/login',(req,res) => {
    console.log('view')
})

router.post('/register',(req,res) => {
    console.log('view')
})

module.exports = router;