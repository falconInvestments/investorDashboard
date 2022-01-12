const portfolioController = require('../controllers/portfolioController.js')
const router = require('express').Router()


//PORTFOLIO ROUTES
//POST routes
router.post('/new', portfolioController.addPortfolio)

//GET routes

//get all portfolios
router.get('/', portfolioController.getAllPortfolios)

// access one portfolio by id
router.get('/:id', portfolioController.getOnePortfolio)
// modify one portfolio by id
router.put('/update/:id', portfolioController.updatePortfolio)
// delete one portfolio by id
router.delete('/delete/:id', portfolioController.deletePortfolio)


module.exports = router