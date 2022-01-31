
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
const routerInvestor = require('./routes/investorRouter.js')
app.use('/api/investors', routerInvestor)


const routerStocks = require('./routes/stockRouter.js')
app.use('/api/stocks', routerStocks)





app.get('/', (req, res) => {
    res.send('Hello World!')
    })
    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })