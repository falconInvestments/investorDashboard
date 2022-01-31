// require the db created in the index file
const db = require('../models/index')

// get the investors model
const Stock = db.Stocks


const addStock = async (req, res) => {
    let input_data = {
        name: req.body.name,
        symbol: req.body.symbol,
        price: req.body.price,
        }
        // using the builtin 'create' function on Customer Model
        const stock = await Stock.create(input_data)
        if(stock){

            res.status(200).send(stock)
        } else {
            res.status(500).send("server error")
        }
        // send a 200 response with the created entry
        
}               

const getAllStocks = async (req, res) => {

    // using the builtin 'findOne' function on Customer Model
    let stocks = await Stock.findAll({})
    res.status(200).send(stocks)
}      

const getOneStock = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Customer Model
    let stocks = await Stock.findOne({where: {id: id}})
    res.status(200).send(stocks)
    }

const updateStock = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'update' function on Customer Model
        const stock = await Stock.update(req.body, { where: {id: id}})
        res.status(200).send(stock)
    }

const deleteStock = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'destroy' function on Customer Model
        await Stock.destroy({where :{id: id}})
        res.status(200).send(`Stock with id: ${id} is deleted`)
    }      
       


    // export all the controller functions
module.exports = {
    addStock,
    getAllStocks,
    getOneStock,
    updateStock,
    deleteStock
}
          