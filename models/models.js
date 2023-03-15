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