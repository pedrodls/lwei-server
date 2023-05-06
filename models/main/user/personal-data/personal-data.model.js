
module.exports = ({
    sequelize,
    Sequelize
}) => {
    
    const PersonalData = sequelize.define("personal_data", {

        bi: {
            type: Sequelize.CHAR(14),
            primaryKey: true
        },
        passaporte: {
            type: Sequelize.CHAR(8),
            allowNull: true
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        avatar: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        birthdate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        gender: {
            type: Sequelize.CHAR(1),
            allowNull: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    return PersonalData;
};