const userStockController = require('../controllers/userStockController.js')
const router = require('express').Router()


//UserStock ROUTES
//POST routes
router.post('/new', userStockController.addUserStock)

//GET routes
//get all 
router.get('/', userStockController.getAllUserStocks)

// access one userStock by id
router.get('/:id', userStockController.getOneUserStock)
// modify one userStock by id
router.put('/update/:id', userStockController.updateUserStock)
// delete one userStock by id
router.delete('/delete/:id', userStockController.deleteUserStock)


module.exports = router