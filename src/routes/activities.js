const {Router} = require('express'); // Nos traemos el Router de express
const axios = require('axios');
const {Activities} =require('../db'); 
const routerA = Router();

//req tiene toda la informacion del request
//res tiene toda la informacion del response
routerA.get('/', (req, res, next)=>{ //con promesas
    try {
        let arr = []
    Activities.findAll()
    .then(response =>{
        arr = response.map(item =>{
            return item.dataValues.activity
        })
        res.send(arr)
    })
    } catch (error) {
        next(error);
    }
})

routerA.post('/', (req, res, next)=>{  // req por query
    try {
        let {activity} = req.query
    Activities.findOrCreate({
        where: {
            activity: activity
        }
    })
    res.send("actividad agregada correctamente")
    } catch (error) {
        next(error);
    }
})


routerA.put('/', ()=>{
    res.send('Soy put /activity')
})
routerA.delete('/', ()=>{
    res.send('Soy delete /activity')
})

module.exports = routerA