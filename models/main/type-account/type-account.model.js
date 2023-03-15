module.exports = ({
    sequelize,
    Sequelize
}) => {

    const TypeAccount = sequelize.define("type_account", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }, 
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    return TypeAccount;
};