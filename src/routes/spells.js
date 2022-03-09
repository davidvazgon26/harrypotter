const {Router} = require('express'); // Nos traemos el Router de express
const axios = require('axios');
const {Spells} =require('../db'); 
const routerS = Router();

routerS.get('/', ()=>{
    res.send('Soy get /spells')
})
routerS.post('/', ()=>{
    res.send('Soy post /spells')
})
routerS.put('/', ()=>{
    res.send('Soy put /spells')
})
routerS.delete('/', ()=>{
    res.send('Soy delete /spells')
})

module.exports = routerS