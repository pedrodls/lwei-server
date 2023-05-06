
module.exports = ({
    sequelize,
    Sequelize
}) => {
    
    const AddressData = sequelize.define("address_data", {

        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        house: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        province: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        county: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telephone1: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telephone2: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    return AddressData;
};