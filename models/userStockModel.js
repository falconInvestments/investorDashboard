module.exports = (sequelize, DataTypes) => {

    
    const UserStock = sequelize.define('userStock', {
        id: {     
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
        accountId: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        sessionId: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },        
         quantity: {
            type:DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return UserStock

};
