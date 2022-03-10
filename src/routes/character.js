const {Router} = require('express'); // Nos traemos el Router de express
const axios = require('axios');
const {Character} = require('../db'); 
const routerCh = Router();

routerCh.get('/', ()=>{
    res.send('Soy get /character')
})
routerCh.post('/', ()=>{
    res.send('Soy post /character')
})
routerCh.put('/', ()=>{
    res.send('Soy put /character')
})
routerCh.delete('/', ()=>{
    res.send('Soy delete /character')
})

module.exports = routerCh