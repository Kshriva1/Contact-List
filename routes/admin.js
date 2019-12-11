const express = require('express');
const router = express.Router();

router.get('/view',(req,res) => {
    console.log('view')
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

module.exports = router;