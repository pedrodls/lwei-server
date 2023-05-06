const genPass = require('./password');

const bcrypt = require('bcrypt');

const passHash = async (qtd = 1, newPassword = "") => {

    //newPassword é uma palavra nova que o usuário define ou seja se o usuário deseja definir uma password própria o sistema não precisa gerar, default = ""

    data = [];

    for (let i = 0; i < qtd; i++) {

        const password = (newPassword === "") ? genPass() : newPassword;

        const passHashed = await bcrypt.hash(password, 4).then(p => p).catch(err => err);

        data[i] = {
            passHashed: passHashed,
            password: password
        }

    }

    return data;

}

module.exports = passHash;