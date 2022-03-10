const {Router} = require('express'); // Nos traemos el Router de express
const axios = require('axios');
const {Wand} =require('../db'); 
const routerW = Router();

routerW.get('/', (req, res, next)=>{
    try {
        let arr = []
    Wand.findAll()
    .then(response =>{
        arr = response.map(item =>{
            obj={
                id: item.dataValues.id, 
                wood: item.dataValues.wood, 
                core: item.dataValues.core, 
                length: item.dataValues.length, 
            }
            return obj
        })
        res.send(arr)
    })
    } catch (error) {
        next(error);
    }
})

routerW.post('/', async (req, res, next)=>{ // post por body y async-await
    try {
        const {wood, core, length} = req.body
    const result = await Wand.create({
        wood, 
        core,
        length
    })
    res.send(result)
    } catch (error) {
        next(error);
    }
})

routerW.put('/', ()=>{
    res.send('Soy put /wand')
})

routerW.delete('/', ()=>{
    res.send('Soy delete /wand')
})

module.exports = routerW