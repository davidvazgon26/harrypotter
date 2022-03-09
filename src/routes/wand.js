const {Router} = require('express'); // Nos traemos el Router de express
const axios = require('axios');
const {Wand} =require('../db'); 
const routerW = Router();

routerW.get('/', ()=>{
    res.send('Soy get /wand')
})
routerW.post('/', ()=>{
    res.send('Soy post /wand')
})
routerW.put('/', ()=>{
    res.send('Soy put /wand')
})
routerW.delete('/', ()=>{
    res.send('Soy delete /wand')
})

module.exports = routerW