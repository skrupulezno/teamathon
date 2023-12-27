const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'mteamathon_db',
  password: '123456',
  port: 5432,
});