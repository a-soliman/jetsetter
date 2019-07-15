//const sqlite3 = require('sqlite3');
import 'sqlite3' ;
//import 'knex';
//import 'sqlite3';
//const knex = require('knex');
// const database = Knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './db.sqlite'
//   },
//   useNullAsDefault: true
// });

// database.schema.hasTable('items').then(exists => {
//   if(!exists) {
//     return database.schema.createTable('items', t => {
//       t.increments('id').primary();
//       t.string('value', 100);
//       t.boolean('packed');
//     });
//   }
// })


const database = {};
export default database;