const whiteList = [
    'http://localhost:9700',
    'http://0.0.0.0:9700',
    'https://inscricao.ipilmakarenko.ao',
    'https://www.inscricao.ipilmakarenko.ao'
]

const corsOption = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1)
            callback(null, true)
        else            
            callback('403')
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    Credential: true
}

module.exports = corsOption