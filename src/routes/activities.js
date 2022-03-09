const {Router} = require('express'); // Nos traemos el Router de express
const axios = require('axios');
const {Activities} =require('../db'); 
const routerA = Router();

routerA.get('/', ()=>{
    res.send('Soy get /activity')
})
routerA.post('/', ()=>{
    res.send('Soy post /activity')
})
routerA.put('/', ()=>{
    res.send('Soy put /activity')
})
routerA.delete('/', ()=>{
    res.send('Soy delete /activity')
})

module.exports = routerA