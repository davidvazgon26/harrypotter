const {Router} = require('express'); // Nos traemos el Router de express
const axios = require('axios');
const {Character} = require('../db'); 
const routerCh = Router();

routerCh.get('/', (req, res, next)=>{
    try {
        let arr =[]
        Character.findAll()
        .then(response =>{
            arr = response.map(item =>{
                // console.log(item.dataValues)

                const {name, species, gender, house, dateOfBirth, wizard, ancestry, patronus, hogwartsStudents, hogwartsStaff, actors, alive, image} = item.dataValues

                obj ={
                    name, 
                    species, 
                    gender, 
                    house, 
                    dateOfBirth, 
                    wizard, 
                    ancestry, 
                    patronus, 
                    hogwartsStudents, 
                    hogwartsStaff, 
                    actors, 
                    alive, 
                    image
                }
                arr.push(obj)
                // return obj
                res.send(arr)
            })
        })
    } catch (error) {
        next(error);
    }
})

routerCh.post('/', async (req, res, next)=>{
    try {
        const {name, species, gender, house, dateOfBirth, wizard, ancestry, patronus, hogwartsStudents, hogwartsStaff, actors, alive, image} = req.body

        const result = await Character.create({
            name, species, gender, house, dateOfBirth, wizard, ancestry, patronus, hogwartsStudents, hogwartsStaff, actors, alive, image
        })
        console.log(result)
        res.send('Soy post /character')
    } catch (error) {
        next(error);
    }
})
routerCh.put('/', ()=>{
    res.send('Soy put /character')
})
routerCh.delete('/', ()=>{
    res.send('Soy delete /character')
})

module.exports = routerCh