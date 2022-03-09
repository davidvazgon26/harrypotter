const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerCh = require('./character.js')
const routerS = require('./spells.js')
const routerW = require('./wand.js')
const routerA = require('./activities.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/',routerCh)
router.use('/character',routerCh)
router.use('/spells',routerS)
router.use('/wand',routerW)
router.use('/activity',routerA)


module.exports = router;