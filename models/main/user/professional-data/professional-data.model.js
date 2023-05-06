
module.exports = ({
    sequelize,
    Sequelize
}) => {
    
    const ProfessionalData = sequelize.define("professional_data", {

        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        occupation: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        patronalEntity: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        town: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        country: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    ProfessionalData.associate = (models) => {

        ProfessionalData.belongsTo(models.ProfessionalType, {
            as: 'professionalType',
            foreignKey: 'professionalTypeId'
        });
    }

    return ProfessionalData;
};