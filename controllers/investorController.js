// require the db created in the index file

const { Stocks } = require('../models/index')
const db = require('../models/index')

// get the investors model
const Investor = db.Investors
const Stocks = db.Stocks
const addInvestor = async (req, res) => {
    let input_data = {
        name: req.body.name,
        email: req.body.email
        }
        // using the builtin 'create' function on Customer Model
        const investor = await Investor.create(input_data)
        
        // send a 200 response with the created entry
        res.status(200).send(investor)
}               

const getAllInvestors = async (req, res) => {

    // using the builtin 'findOne' function on Customer Model
    let investors = await Investor.findAll({
        include: Stocks
    })
    res.status(200).send(investors)
}      

const getOneInvestor = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Customer Model
    let investors = await Investor.findOne({where: {id: id}, include: Stocks})
    res.status(200).send(investors)
    }

const updateInvestor = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'update' function on Customer Model
        const investor = await Investor.update(req.body, { where: {id: id}})
        res.status(200).send(investor)
    }

const deleteInvestor = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'destroy' function on Customer Model
        await Investor.destroy({where :{id: id}})
        res.status(200).send(`Investor with id: ${id} is deleted`)
    }      
       


    // export all the controller functions
module.exports = {
    addInvestor,
    getAllInvestors,
    getOneInvestor,
    updateInvestor,
    deleteInvestor
}
          