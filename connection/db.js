// import postgres pool
const { Pool } = require('pg')


const dbPool = new Pool({
    database: 'personal_web_b30_sesi_1',
    port: 5432,
    user: 'postgres',
    password: 'root'
})


module.exports = dbPool
