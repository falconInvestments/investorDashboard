
//initializing port and express
const express = require('express')
const app = express()
const db = require("./models")
const port = process.env.PORT || 3000 

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//router file
const routerInvestor = require('./routes/investorRouter.js')
app.use('/api/investors', routerInvestor)

const routerPortfolio = require('./routes/portfolioRouter.js')
app.use('/api/portfolios', routerPortfolio)

const routerStocks = require('./routes/stockRouter.js')
app.use('/api/stocks', routerStocks)



db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
    })
