
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
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }, 
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    return ProfessionalData;
};