
module.exports = ({
    sequelize,
    Sequelize
}) => {
    
    //Dados pessoais de todos os usuários do sistema (bilhete, nome completo, data de nascimento, sexo)

    const PersonalData = sequelize.define("personal_data", {

        bi: {
            type: Sequelize.CHAR(14),
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        avatar: {
            type: Sequelize.STRING,
            allowNull: false,
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