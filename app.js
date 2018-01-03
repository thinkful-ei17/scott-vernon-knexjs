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

//7. Italian restaurants in one of several zip codes
// knex.select("id")
// .from('restaurants')
// .whereIn("address_zipcode", ['11372', '10013','10014'])
// .then(console.log);

//8. Create a restaurant
// knex('restaurants').returning('id')
// .insert({
//   name: 'Slaughterhouse Five',
//   borough: 'Brooklyn',
//   cuisine: 'coffee',
//   address_building_number: '123',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231'
// })
// .then(console.log);
// // Destroy the connection pool
//
// knex.select().from('restaurants').where('id','25371').then(console.log);

//9. Create a restaurant and show id/name
// knex('restaurants').returning(['name', 'id'])
// .insert({
//   name: 'IT',
//   borough: 'Brooklyn',
//   cuisine: 'coffee',
//   address_building_number: '123',
//   address_street: 'Clown Avenue',
//   address_zipcode: '11231'
// })
// .then(console.log);

// //10. Create three restaurants using a single command,
// //with values of your choosing, returning
// //the id and name of each restaurant.
//
// knex('restaurants').returning(['name', 'id'])
// .insert([
//   {
//     name: 'Chucky',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Clown Avenue',
//     address_zipcode: '11231'
//   },
//   {
//     name: 'SAW',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Clown Avenue',
//     address_zipcode: '11231'
//   },
//   {
//     name: 'JAWS',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Clown Avenue',
//     address_zipcode: '11231'
//   }
// ])
// .then(console.log);

// //11. Update a record
// knex('restaurants')
// .where('nyc_restaurant_id', '30191841')
// .update({
//   name: 'DJ Reynolds Pub'
// }).then(console.log);
//
// knex.select().from('restaurants').where('nyc_restaurant_id', '30191841').then(console.log);

// //12. Delete id 10
// knex('grades')
// .where('id', '11')
// .del().then(console.log);

// //13. Delete id 10
// knex('restaurants')
// .where('id', '11')
// .del().then(console.log);


knex.destroy().then(() => {
  console.log('database connection closed');
});
