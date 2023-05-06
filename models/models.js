const {
    sequelize,
    Sequelize,
    Op
} = require('../config/connection/connection');

//------------------------Requisição dos Modelos ----------------------------
let db = {};

db.sequelize = sequelize

db.Sequelize = Sequelize

db.Op = Op

//---------------------------------------------------------------------------
//Applys-Module



db.User = require('./main/user/user.model')(db)
db.PersonalData = require('./main/user/personal-data/personal-data.model')(db)
db.ProfessionalData = require('./main/user/professional-data/professional-data.model')(db)
db.AddressData = require('./main/user/address-data/address-data.model')(db)

db.TypeAccount = require('./main/type-account/type-account.model')(db)

db.ProfessionalType = require('./main/user/professional-type/professional-type.model')(db)

//-------------------------Associação dos Modelos----------------------------
Object.keys(db).forEach(key => {
    if (db[key].associate)
        db[key].associate(db) //invocando o método associar no modelo caso exista
});
//---------------------------------------------------------------------------
//------------------------- Sincronizando -----------------------------------
sequelize.sync({
    force: false,
    alter: false
})
//--------------------------------------------------------------------------
module.exports = db;