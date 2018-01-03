const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

knex.select('id', 'name', 'borough', 'cuisine')
  .from('restaurants')
  .limit(19)
  .then(results => console.log(results));
