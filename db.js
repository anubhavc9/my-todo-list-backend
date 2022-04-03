const Pool = require('pg').Pool;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'todo_database',
    port: 5432
})

module.exports = pool;