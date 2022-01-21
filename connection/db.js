// import postgres pool
const {Pool} = require('pg')

const dbPool = new Pool({
    host: 'ec2-18-234-17-166.compute-1.amazonaws.com
    database: 'd2mu8rsbl5p1ru',
    port: 5432,
    user: 'qkqcyqpyrfeerj',
    password: '54626b6c73c31bbb59f2dff1530633c6e27510c289a84378b4d7e371bd7d7ff1'
})


module.exports = dbPool
