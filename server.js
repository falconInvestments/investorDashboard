
//initializing port and express
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000 

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

//router file



const routerStocks = require('./routes/stockRouter.js')
app.use('/api/stocks', routerStocks)

const routerUserStocks = require('./routes/userStockRouter.js')
app.use('/api/userStocks', routerUserStocks)





app.get('/', (req, res) => {
    res.send('Hello World!')
    })
    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })