
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'investory' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "investors"
    const Stock = sequelize.define('stock', {
        id: { // the id will be our primary key for accessing stock data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull:false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        investorId: {
            type:DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Stock

};
