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

        User.hasMany(models.TypeAccount, {
            as: 'typeAccounts',
            foreignKey: 'typeAccountsId'
        });

        User.belongsTo(models.PersonalData, {
            as: 'personalData',
            foreignKey: 'personalDataId'
        });

        User.belongsTo(models.ProfessionalData, {
            as: 'professionalData',
            foreignKey: 'professionalDataId'
        });

        User.belongsTo(models.AddressData, {
            as: 'addressData',
            foreignKey: 'addressDataId'
        });

    };
    
    return User;
};