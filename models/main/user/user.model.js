module.exports = ({
    sequelize,
    Sequelize
}) => {

    const User = sequelize.define("user", {

        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                min: 10
            }
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        indexes: [{
            unique: true,
            fields: ['email', 'password']
        }]
    });

    User.associate = (models) => {

        User.belongsTo(models.TypeAccount, {
            as: 'typeAccount',
            foreignKey: 'typeAccountId'
        });

        User.belongsTo(models.PersonalData, {
            as: 'personalData',
            foreignKey: 'personalDataId'
        });

    };
    
    return User;
};