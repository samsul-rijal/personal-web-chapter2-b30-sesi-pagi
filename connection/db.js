// import postgres pool
const {Pool} = require('pg')

const dbPool = new Pool({
    host: 'localhost',
    database: 'postgre',
    port: 5432,
    user: 'postgre',
    password: 'ADMIN'
})


module.exports = dbPool
