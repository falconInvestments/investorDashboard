// require the db created in the index file

const db = require('../models/index')

// get the portfolios model
const Portfolio = db.Portfolios
const Stocks = db.Stocks


const addPortfolio = async (req, res) => {
    let input_data = {
        name: req.body.name,
        investorId: req.body.investorId,
        }
        // using the builtin 'create' function on Customer Model
        const portfolio = await Portfolio.create(input_data)
        
        // send a 200 response with the created entry
        res.status(200).send(portfolio)
}               

const getAllPortfolios = async (req, res) => {

    // using the builtin 'findOne' function on Customer Model
    let portfolios = await Portfolio.findAll({
        include: Stocks
    })
    res.status(200).send(portfolios)
}      

const getOnePortfolio = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Customer Model
    let portfolios = await Portfolio.findOne({where: {id: id}, include: Stocks})
    res.status(200).send(portfolios)
    }

const updatePortfolio = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'update' function on Customer Model
        const portfolio = await Portfolio.update(req.body, { where: {id: id}})
        res.status(200).send(portfolio)
    }

const deletePortfolio = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'destroy' function on Customer Model
        await Portfolio.destroy({where :{id: id}})
        res.status(200).send(`portfolio with id: ${id} is deleted`)
    }      
       


    // export all the controller functions
module.exports = {
    addPortfolio,
    getAllPortfolios,
    getOnePortfolio,
    updatePortfolio,
    deletePortfolio
}
          