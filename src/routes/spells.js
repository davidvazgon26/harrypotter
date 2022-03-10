const {Router} = require('express'); // Nos traemos el Router de express
const axios = require('axios');
const {Spells} =require('../db'); 
const routerS = Router();

routerS.get('/', async (req, res, next)=>{  // con async await
    try {
        let arr = []
    let result = await Spells.findAll()
    arr = result.map(item =>{
        return item.dataValues.spell
    })
    res.send(arr)
    } catch (error) {
        next(error)
    }
})

routerS.post('/:spell', (req, res, next)=>{  // req por params
    try {
        let {spell} = req.params
    console.log(spell)
    Spells.create({
        spell
    })
    res.send('Spell creado')
    } catch (error) {
        next(error);
    }
})

routerS.put('/', ()=>{
    res.send('Soy put /spells')
})

routerS.delete('/', ()=>{
    res.send('Soy delete /spells')
})

module.exports = routerS