

exports.expiredSessionMessage = (res) => {
    res.status(200).end({
        code: 401,
        message: 'Sessão expirada'
    });
}