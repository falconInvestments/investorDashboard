module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
    const Portfolio = sequelize.define('portfolio', {
        id: { // the id will be our primary key for accessing portfolio data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        investorId: {
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    });
    // Portfolio.associate = models => {
    //     Portfolio.belongsTo(models.Investor, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Portfolio
};
