const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');


let sequelize = null;

    if (process && process.env.DATABASE_URL) {
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
                }
              }
            }
        );
    } else {
       sequelize = new Sequelize(
        { // use imported configurations from dbConfig
            database: dbConfig.DB,
            username: dbConfig.USER,
            password: dbConfig.PASSWORD,
            dialect: dbConfig.dialect,
            host: dbConfig.HOST,
        })
    }

// authenticate will test the connection with DB and return a promise
sequelize.authenticate()
    .then(() => { // successfully connected to DB
        console.log("connected to Postgres DB")
    })
    .catch(e => {// failed connecting to DB
        console.log('unable to connect to Postgres DB' + e)
    })

const db = {}
db.sequelize = sequelize

db.Investors = require('./investorModel')(sequelize, DataTypes)
db.Stocks = require('./stockModel')(sequelize, DataTypes)


// sync the db by running the model
// "force: false" ensures that the table is not created again every time the program runs
db.sequelize.sync({ force: true }).then(() => {
  console.log('DB synced with sequelize')
}).catch((error) => {
  console.log('Error syncing the DB to sequelize' + error)
})





module.exports = db;
