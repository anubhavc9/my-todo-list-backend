const Pool = require('pg').Pool;

// FOR LOCAL ENV
// const pool = new Pool({
//   host: 'localhost',
//   user: 'postgres',
//   database: 'todo_database',
//   port: 5432,
// });

// FOR PRODUCTION ENV
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
