
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'investory' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "investors"
    const Investor = sequelize.define('investor', {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });
    Investor.associate = models => {
        Investor.hasMany(models.Portfolio, {
            onDelete:"cascade"
        });
    }
    
    return Investor
}
