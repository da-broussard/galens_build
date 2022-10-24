const {Client}= require('pg');

const DB_NAME= "old_west_gang_war";

const DB_URL=  `postgres://localhost:5432/${DB_NAME}`;

const client = new Client(DB_URL);

// github actions client config
// if (process.env.CI) {
//   client = new Client({
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'postgres',
//     database: 'postgres',
//   });
// } else {
//   // local / heroku client config
//   client = new Client(DB_URL);
// }

module.exports = client;