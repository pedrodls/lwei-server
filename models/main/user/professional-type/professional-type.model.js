module.exports = ({
    sequelize,
    Sequelize
}) => {

    const ProfessionalType = sequelize.define("professional_type", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }, 
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    return ProfessionalType;
};