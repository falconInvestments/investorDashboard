const stockController = require('../controllers/stockController.js')
const router = require('express').Router()


//STOCK ROUTES
//POST routes
router.post('/new', stockController.addStock)

//GET routes
//get all 
router.get('/', stockController.getAllStocks)

// access one stock by id
router.get('/:id', stockController.getOneStock)
// modify one stock by id
router.put('/update/:id', stockController.updateStock)
// delete one stock by id
router.delete('/delete/:id', stockController.deleteStock)


module.exports = router