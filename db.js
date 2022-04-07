const Pool = require('pg').Pool;

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     database: 'todo_database',
//     port: 5432
// })

const pool = new Pool({
  host: 'ec2-3-217-251-77.compute-1.amazonaws.com',
  user: 'bmlytkfspbkjqi',
  database: 'd7maldq3eev143',
  password: '36ff4097a58c363831a19948906d52f91fc9ff2e8bd1131f8b1fa9abf150db83',
  port: 5432,
});

module.exports = pool;
