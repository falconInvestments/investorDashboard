// require the db created in the index file
const db = require('../models/index')


const UserStock = db.UserStocks


const addUserStock = async (req, res) => {

    let input_data = {
        name: req.body.name,
        symbol: req.body.symbol,
        price: req.body.price,
        accountId : req.body.accountId,
        }
        // using the builtin 'create' function on Customer Model
        const userStock = await UserStock.create(input_data)
        if(userStock){

            res.status(200).send(userStock)
        } else {
            res.status(500).send("server error")
        }
        // send a 200 response with the created entry
        
}               

const getAllUserStocks = async (req, res) => {

    // using the builtin 'findOne' function on Customer Model
    let userStocks = await UserStock.findAll({})
    res.status(200).send(userStocks)
}      

const getOneUserStock = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Customer Model
    let userStocks = await UserStock.findOne({where: {id: id}})
    res.status(200).send(userStocks)
    }

const updateUserStock = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'update' function on Customer Model
        const userStock = await UserStock.update(req.body, { where: {id: id}})
        res.status(200).send(userStock)
    }

const deleteUserStock = async (req, res) => {
        let id = req.params.id
    
        // using the builtin 'destroy' function on Customer Model
        await UserStock.destroy({where :{id: id}})
        res.status(200).send(`userStock with id: ${id} is deleted`)
    }      
       


    // export all the controller functions
module.exports = {
    addUserStock,
    getAllUserStocks,
    getOneUserStock,
    updateUserStock,
    deleteUserStock
}
          