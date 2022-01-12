const investorController = require('../controllers/investorController.js')

const router = require('express').Router()


//INVESTOR ROUTES
//POST routes
router.post('/new', investorController.addInvestor)

//GET routes

//get all investors
router.get('/', investorController.getAllInvestors)

// access one customer by id
router.get('/:id', investorController.getOneInvestor)
// modify one customer by id
router.put('/update/:id', investorController.updateInvestor)
// delete one customer by id
router.delete('/delete/:id', investorController.deleteInvestor)
    
                


module.exports = router