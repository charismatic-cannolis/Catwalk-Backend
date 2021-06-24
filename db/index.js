const { Pool, Client } = require('pg');
const { host, user, database, password, port } = require('../config.js');

const pool = new Pool({
    host,
    user,
    database,
    password,
    port,
});

module.exports = pool;
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
