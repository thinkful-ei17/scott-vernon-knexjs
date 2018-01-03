'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));

// knex.select('id', 'name', 'borough', 'cuisine')
//   .from('restaurants')
//   .where( { borough: 'Manhattan'})
//   .limit(5)
//   .then(results => console.log(JSON.stringify(results, null, 4)))
//   .catch( err => console.log( err ) );
 
// // 1. Get all restaurants
// knex.select().table('restaurants')
//   .limit(10)
//   .then(console.log);

// // 2. Get Italian restaurants
// knex.select()
//   .from('restaurants')
//   .where({'cuisine': 'Italian'})
//   .limit(10)
//   .then(console.log);

// 3. Get 10 Italian restaurants, subset of fields 
// knex.select('id', 'name')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// 4. Count of Thai restaurants
// knex.count()
//   .from('restaurants')
//   .where('cuisine', 'Thai')
//   .then(console.log);

// 5. Count of restaurants
// knex.count()
//   .from('restaurants')
//   .then(console.log);

// 6. Count of Thai restaurants in zip code
// knex.count()
//   .from('restaurants')
//   .where('address_zipcode', '11372')
//   .then(console.log);


// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});